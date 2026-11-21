// Prepares the pre-rendered build in dist/browser for GitHub Pages hosting.
//
// - dist/browser/contact/index.html -> dist/browser/contact.html (also nested, e.g. blog posts)
//   GitHub Pages serves /contact from contact.html with a 200 status and no
//   redirect, so every page URL matches its canonical link exactly.
// - 404.html = the client-side app shell, so unknown URLs still show the
//   site's own "Page not found" page (with a real 404 status).
// - CNAME keeps the perfictus.com custom domain; .nojekyll disables Jekyll.
//
// Usage: npm run build:pages
import { existsSync, readdirSync, renameSync, rmdirSync, statSync, copyFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = 'dist/browser';
if (!existsSync(join(out, 'index.html'))) {
  console.error(`No build found in ${out}. Run "ng build" first.`);
  process.exit(1);
}

// Depth-first: blog/<post>/index.html -> blog/<post>.html. A folder that still has
// other pages in it (like blog/) keeps its index.html, so /blog/ is served from it.
const flattened = [];
function flatten(dir, url) {
  for (const name of readdirSync(dir)) {
    const sub = join(dir, name);
    if ((dir === out && (name === 'assets' || name === 'media')) || !statSync(sub).isDirectory()) continue;
    flatten(sub, `${url}/${name}`);
    const page = join(sub, 'index.html');
    if (!existsSync(page)) continue;
    if (readdirSync(sub).length === 1) {
      renameSync(page, `${sub}.html`);
      rmdirSync(sub);
      flattened.push(`${url}/${name}`);
    } else {
      flattened.push(`${url}/${name}/`);
    }
  }
}
flatten(out, '');

const shell = existsSync(join(out, 'index.csr.html')) ? 'index.csr.html' : 'index.html';
copyFileSync(join(out, shell), join(out, '404.html'));
writeFileSync(join(out, 'CNAME'), 'perfictus.com\n');
writeFileSync(join(out, '.nojekyll'), '');

console.log(`GitHub Pages ready: / ${flattened.join(' ')} + 404.html (from ${shell}), CNAME, .nojekyll`);
