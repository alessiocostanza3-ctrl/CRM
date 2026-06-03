const http = require('http');
const fs = require('fs');
const path = require('path');
const data = require('./data');

const PORT = Number(process.env.PORT || 3006);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const SUPABASE_TABLE = process.env.SUPABASE_TABLE || 'crm_state';
const SUPABASE_ROW_ID = process.env.SUPABASE_ROW_ID || 'main';

function hasSupabaseConfig() {
  return !!SUPABASE_URL && !!SUPABASE_SERVICE_ROLE_KEY;
}

function cloneSeedData() {
  return JSON.parse(JSON.stringify(data));
}

async function supabaseRequest(pathname, options = {}) {
  const url = `${SUPABASE_URL}/rest/v1/${pathname}`;
  const headers = {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
    ...options.headers
  };
  const response = await fetch(url, { ...options, headers });
  return response;
}

async function readDatasetsFromSupabase() {
  const encodedId = encodeURIComponent(SUPABASE_ROW_ID);
  const res = await supabaseRequest(`${SUPABASE_TABLE}?id=eq.${encodedId}&select=payload`);
  if (!res.ok) throw new Error(`Supabase read failed: ${res.status}`);
  const rows = await res.json();
  if (!Array.isArray(rows) || !rows.length || !rows[0].payload) {
    return cloneSeedData();
  }
  return rows[0].payload;
}

async function writeDatasetsToSupabase(payload) {
  const body = [{ id: SUPABASE_ROW_ID, payload }];
  const res = await supabaseRequest(`${SUPABASE_TABLE}?on_conflict=id`, {
    method: 'POST',
    headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`Supabase write failed: ${res.status}`);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => { raw += chunk; });
    req.on('end', () => resolve(raw));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Normalizza l'URL decodificando caratteri speciali
  let safeUrl = decodeURI(req.url.split('?')[0]);

  if (safeUrl === '/api/data') {
    try {
      if (req.method === 'GET') {
        const payload = hasSupabaseConfig() ? await readDatasetsFromSupabase() : cloneSeedData();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(payload));
        return;
      }

      if (req.method === 'PUT') {
        const raw = await readBody(req);
        const parsed = raw ? JSON.parse(raw) : null;
        if (!parsed || typeof parsed !== 'object') {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ error: 'Invalid payload' }));
          return;
        }
        if (hasSupabaseConfig()) {
          await writeDatasetsToSupabase(parsed);
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ ok: true, persisted: hasSupabaseConfig() ? 'supabase' : 'memory-only' }));
        return;
      }

      if (req.method === 'POST' && safeUrl === '/api/data') {
        // No-op safeguard for accidental posts
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ error: 'Method not allowed' }));
        return;
      }
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ error: String(error.message || error) }));
      return;
    }
  }

  if (safeUrl === '/api/reset-seed' && req.method === 'POST') {
    try {
      const seed = cloneSeedData();
      if (hasSupabaseConfig()) await writeDatasetsToSupabase(seed);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ ok: true }));
      return;
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ error: String(error.message || error) }));
      return;
    }
  }

  if (safeUrl.startsWith('/api/')) {
    const key = safeUrl.replace('/api/', '');
    try {
      const source = hasSupabaseConfig() ? await readDatasetsFromSupabase() : cloneSeedData();
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(source[key]));
        return;
      }
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ error: String(error.message || error) }));
      return;
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  if (safeUrl === '/') {
    safeUrl = '/index.html';
  }

  const filePath = path.join(__dirname, safeUrl);

  // Evita directory traversal attacks banali
  if (!filePath.startsWith(__dirname)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback a index.html per supportare eventuale client-side routing (SPA fallback)
      const fallbackPath = path.join(__dirname, 'index.html');
      fs.readFile(fallbackPath, (fbErr, fbContent) => {
        if (fbErr) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end('File non trovato');
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(fbContent);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Errore interno del server');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(content);
      }
    });
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server CRM in esecuzione su http://localhost:${PORT}`);
});
