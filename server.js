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

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Normalizza l'URL decodificando caratteri speciali
  let safeUrl = decodeURI(req.url.split('?')[0]);

  if (safeUrl === '/api/data') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(data));
    return;
  }

  if (safeUrl.startsWith('/api/')) {
    const key = safeUrl.replace('/api/', '');
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify(data[key]));
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
