// Tells Bing, Yandex and other IndexNow search engines about new or changed pages.
// (Google does not use IndexNow; it reads sitemap.xml.)
//
// Default: pings the blog posts that go live today (India time), plus /blog/ and the sitemap.
// Usage:   node scripts/indexnow.mjs           (today's posts only; does nothing if none)
//          node scripts/indexnow.mjs --all     (every URL in dist/browser/sitemap.xml)
import { readFileSync } from 'node:fs';

const HOST = 'perfictus.com';
const KEY = '68dfa3e99ca157e74e5421f0f53c9a9b'; // served at https://perfictus.com/<KEY>.txt
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());

const sitemap = readFileSync('dist/browser/sitemap.xml', 'utf8');
const entries = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => ({ url: m[1], lastmod: m[2] }));

let urlList;
if (process.argv.includes('--all')) {
  urlList = entries.map((e) => e.url);
} else {
  const fresh = entries.filter((e) => e.url.includes('/blog/') && e.lastmod === today && !e.url.endsWith('/blog/')).map((e) => e.url);
  urlList = fresh.length ? [...fresh, `https://${HOST}/blog/`] : [];
}

if (!urlList.length) {
  console.log('IndexNow: no new posts today, nothing to submit.');
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URL(s) – HTTP ${res.status}`);
urlList.forEach((u) => console.log('  ' + u));
