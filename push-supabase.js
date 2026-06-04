const fs = require('fs');
const dataFile = './data.js';
const data = require(dataFile);
const SUPABASE_URL = 'https://wkvqpizkmsdqmyxbhnnu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdnFwaXprbXNkcW15eGJobm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNDM0MzksImV4cCI6MjA5NTkxOTQzOX0.AE4m-MNhloG58uuZsdb0Ay2jaq4amiisPh80NxhHTZw';
const SUPABASE_TABLE = 'crm_state';
const SUPABASE_ROW_ID = 'main';

async function upload() {
  const url = `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?on_conflict=id`;
  const body = JSON.stringify([{ id: SUPABASE_ROW_ID, payload: data }]);
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
    },
    body: body
  });
  if (!res.ok) {
    console.error('Failed to upload to Supabase', res.status, await res.text());
  } else {
    console.log('Successfully uploaded mock data to Supabase!');
  }
}
upload();
