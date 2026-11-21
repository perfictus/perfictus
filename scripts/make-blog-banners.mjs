// Creates the 1200x630 blog banner images in public/assets/img/blog/<slug>.jpg
// from the posts in src/app/data/blog.ts (slug, category, icon and banner text).
//
// Usage:  node scripts/make-blog-banners.mjs            (all posts)
//         node scripts/make-blog-banners.mjs <slug>     (one post)
// Needs Google Chrome installed (macOS path below) and an internet connection for Google Fonts.
import { spawn } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const root = resolve('.');
const outDir = join(root, 'public/assets/img/blog');
mkdirSync(outDir, { recursive: true });

// Read the posts straight from the TypeScript data file.
const src = readFileSync(join(root, 'src/app/data/blog.ts'), 'utf8');
const field = (block, name) => (block.match(new RegExp(`\\n\\s{4}${name}: '((?:[^'\\\\]|\\\\.)*)'`)) || [])[1]?.replace(/\\'/g, "'");
const posts = src.split(/\n  \{\n/).slice(1).map((b) => '\n' + b).map((b) => ({
  slug: field(b, 'slug'), category: field(b, 'category'), icon: field(b, 'icon'), banner: field(b, 'banner'), date: field(b, 'date'),
})).filter((p) => p.slug);
const only = process.argv[2];
const todo = only ? posts.filter((p) => p.slug === only) : posts;
if (!todo.length) { console.error('No matching posts.'); process.exit(1); }

// One colour theme per post (in the order of blog.ts), so every banner looks different.
// d = deep corner, m = main colour, l = light highlight.
const moods = [
  { d: '#1e0846', m: '#6d28d9', l: '#c4b5fd' }, // violet
  { d: '#071a52', m: '#2563eb', l: '#93c5fd' }, // blue
  { d: '#4a0d05', m: '#ea580c', l: '#fcd34d' }, // orange
  { d: '#03302f', m: '#0d9488', l: '#99f6e4' }, // teal
  { d: '#4a0830', m: '#db2777', l: '#fbcfe8' }, // pink
  { d: '#0c1150', m: '#4f46e5', l: '#67e8f9' }, // indigo-cyan
  { d: '#2e0650', m: '#a21caf', l: '#f9a8d4' }, // magenta
  { d: '#02301c', m: '#00b46b', l: '#d9ff8a' }, // brand green
  { d: '#3d2402', m: '#d97706', l: '#fde68a' }, // amber
  { d: '#40041a', m: '#be123c', l: '#fecdd3' }, // crimson
  { d: '#062a44', m: '#0284c7', l: '#a5f3fc' }, // sky
  { d: '#1b1404', m: '#a16207', l: '#fef08a' }, // gold
  { d: '#062b1f', m: '#059669', l: '#a7f3d0' }, // emerald
  { d: '#3b0a1e', m: '#e11d48', l: '#fdba74' }, // rose-orange
  { d: '#0f1b3d', m: '#3b5bdb', l: '#c7d2fe' }, // royal
  { d: '#2a0a3d', m: '#9333ea', l: '#f0abfc' }, // purple
  { d: '#03283a', m: '#0e7490', l: '#a5f3fc' }, // ocean
  { d: '#3a1004', m: '#c2410c', l: '#fde047' }, // sunset
];

const asset = (p) => pathToFileURL(join(root, 'public/assets', p)).href;
// "2026-12-01" -> "DECEMBER 2026"
const label = (date) => new Date(date + 'T12:00:00Z').toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).toUpperCase();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function html(post, i) {
  const m = moods[i % moods.length];
  const [headline, subline = ''] = post.banner.split('|');
  const size = headline.length > 20 ? 66 : headline.length > 15 ? 76 : 86;
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${asset('scss/fontawesome.css')}">
<style>
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;position:relative;
  background:radial-gradient(circle at 78% 40%,${m.l}55 0%,transparent 42%),linear-gradient(125deg,${m.d} 0%,${m.m} 62%,${m.l} 130%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px);background-size:60px 60px;mask-image:radial-gradient(ellipse at 75% 50%,#000 15%,transparent 72%)}
.blob{position:absolute;border-radius:50%;filter:blur(90px)}
.b1{width:520px;height:520px;right:-100px;top:-160px;background:${m.l};opacity:.35}
.b2{width:460px;height:460px;left:-180px;bottom:-240px;background:${m.d};opacity:.8}
.left{position:absolute;left:72px;top:64px;bottom:64px;width:640px;display:flex;flex-direction:column}
.chip{align-self:flex-start;padding:9px 18px;border-radius:999px;font-size:17px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:rgba(255,255,255,.14);border:1.5px solid rgba(255,255,255,.35)}
h1{font-family:'Space Grotesk',sans-serif;font-size:${size}px;line-height:1.02;letter-spacing:-.035em;margin-top:34px;color:#fff;text-shadow:0 4px 30px rgba(0,0,0,.25)}
h2{font-size:32px;font-weight:500;color:rgba(255,255,255,.86);margin-top:20px;line-height:1.3}
.foot{margin-top:auto;display:flex;align-items:center;gap:18px}
.foot img{height:44px;filter:drop-shadow(0 2px 10px rgba(0,0,0,.25))}
.foot span{font-size:18px;color:rgba(255,255,255,.8);padding-left:18px;border-left:1.5px solid rgba(255,255,255,.35)}
.visual{position:absolute;right:70px;top:50%;width:380px;height:380px;transform:translateY(-50%)}
.ring{position:absolute;inset:0;border-radius:50%;border:1.5px dashed rgba(255,255,255,.4)}
.ring.r2{inset:52px;border-style:solid;border-color:rgba(255,255,255,.18)}
.tile{position:absolute;inset:100px;border-radius:44px;display:grid;place-items:center;
  background:linear-gradient(135deg,rgba(255,255,255,.95),${m.l});box-shadow:0 30px 70px -14px ${m.d}, inset 0 2px 0 rgba(255,255,255,.9)}
.tile i{font-size:84px;color:${m.m}}
.dot{position:absolute;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 0 24px ${m.l}}
.d1{top:30px;left:70px}.d2{bottom:60px;right:20px;width:12px;height:12px}.d3{top:160px;right:-6px;width:10px;height:10px}
.year{position:absolute;right:46px;top:40px;font-family:'Space Grotesk';font-weight:700;font-size:20px;letter-spacing:.12em;color:rgba(255,255,255,.75)}
</style></head><body>
<div class="blob b2"></div><div class="blob b1"></div><div class="grid"></div>
<div class="year">${esc(label(post.date))}</div>
<div class="left">
  <span class="chip">${esc(post.category)}</span>
  <h1>${esc(headline)}</h1>
  <h2>${esc(subline)}</h2>
  <div class="foot"><img src="${asset('img/logo/perfictus-white.png')}"><span>perfictus.com/blog</span></div>
</div>
<div class="visual"><div class="ring"></div><div class="ring r2"></div><div class="tile"><i class="${post.icon}"></i></div>
<span class="dot d1"></span><span class="dot d2"></span><span class="dot d3"></span></div>
</body></html>`;
}

// --- render with headless Chrome over the DevTools protocol ---
const port = 9400 + Math.floor(Math.random() * 400);
const work = mkdtempSync(join(tmpdir(), 'pf-banners-'));
const chrome = spawn(CHROME, ['--headless=new', '--hide-scrollbars', '--allow-file-access-from-files', `--remote-debugging-port=${port}`, `--user-data-dir=${join(work, 'profile')}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 60 && !target; i++) { await sleep(250); try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page'); } catch {} }
if (!target) { console.error('Could not start Chrome at', CHROME); chrome.kill(); process.exit(1); }
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r));
let id = 0; const pending = new Map();
ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });

for (const post of todo) {
  const file = join(work, `${post.slug}.html`);
  writeFileSync(file, html(post, posts.indexOf(post)));
  await send('Page.navigate', { url: pathToFileURL(file).href });
  await sleep(1500);
  await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
  const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 86 });
  writeFileSync(join(outDir, `${post.slug}.jpg`), Buffer.from(shot.result.data, 'base64'));
  console.log('✓', post.slug);
}
ws.close(); chrome.kill();
