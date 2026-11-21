// Generates the SEO files for the built site in dist/browser:
//   sitemap.xml  – every pre-rendered page (scheduled blog posts appear on their publish day)
//   feed.xml     – RSS feed of published blog posts
//   llms.txt     – plain-text summary of the site for AI assistants and AI search
//
// Runs after prepare-gh-pages.mjs (see "build:pages" in package.json).
import { execSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const SITE = 'https://perfictus.com';
const out = 'dist/browser';
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());

// ---------- blog posts (read from the TypeScript data file) ----------
const src = readFileSync('src/app/data/blog.ts', 'utf8');
const field = (block, name) =>
  (block.match(new RegExp(`\\n\\s{4}${name}:\\s*'((?:[^'\\\\]|\\\\.)*)'`)) || [])[1]?.replace(/\\'/g, "'");
const posts = src
  .split(/\n  \{\n/)
  .slice(1)
  .map((b) => '\n' + b)
  .map((b) => ({
    slug: field(b, 'slug'),
    title: field(b, 'title'),
    description: field(b, 'description'),
    category: field(b, 'category'),
    date: field(b, 'date'),
  }))
  .filter((p) => p.slug && p.date && p.date <= today)
  .sort((a, b) => b.date.localeCompare(a.date));

// ---------- pages that were pre-rendered ----------
const skip = new Set(['/error', '/home', '/index7']);
const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    if (statSync(file).isDirectory()) {
      if (dir === out && (name === 'assets' || name === 'media')) continue;
      walk(file);
    } else if (name.endsWith('.html') && name !== '404.html' && name !== 'index.csr.html') {
      const rel = relative(out, file).replace(/\\/g, '/');
      const path = rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');
      if (!skip.has(path)) pages.push(path);
    }
  }
})(out);

let siteUpdated = today;
try { siteUpdated = execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim() || today; } catch {}

const postDate = Object.fromEntries(posts.map((p) => [`/blog/${p.slug}`, p.date]));
const rules = [
  [/^\/$/, '1.0', 'weekly'],
  [/^\/(shopify-development|mobile-app-development|service|portfolio)$/, '0.9', 'monthly'],
  [/^\/(contact|blog\/)$/, '0.8', 'weekly'],
  [/^\/blog\//, '0.7', 'monthly'],
  [/^\/(about|client-reviews|careers)$/, '0.6', 'monthly'],
  [/./, '0.3', 'yearly'],
];
const order = (p) => rules.findIndex(([re]) => re.test(p));
const first = ['/', '/shopify-development', '/mobile-app-development', '/service', '/portfolio'];
const rank = (p) => (first.includes(p) ? first.indexOf(p) : first.length + order(p));
pages.sort((a, b) => rank(a) - rank(b) || (postDate[b] || '').localeCompare(postDate[a] || '') || a.localeCompare(b));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const urls = pages.map((path) => {
  const [, priority, freq] = rules.find(([re]) => re.test(path));
  const lastmod = postDate[path] || (path === '/blog/' && posts[0]?.date) || siteUpdated;
  return `  <url>\n    <loc>${SITE}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
});
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);

// ---------- RSS feed ----------
const rfc822 = (d) => new Date(d + 'T06:00:00+05:30').toUTCString();
const items = posts.map((p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <description>${esc(p.description)}</description>
      <category>${esc(p.category)}</category>
      <pubDate>${rfc822(p.date)}</pubDate>
    </item>`);
writeFileSync(join(out, 'feed.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Perfictus Blog – Shopify &amp; E-commerce Guides</title>
    <link>${SITE}/blog/</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Shopify development, Shopify SEO, e-commerce growth and mobile app guides from the Perfictus team.</description>
    <language>en</language>
    <lastBuildDate>${posts[0] ? rfc822(posts[0].date) : new Date().toUTCString()}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>
`);

// ---------- llms.txt ----------
writeFileSync(join(out, 'llms.txt'), `# Perfictus

> Perfictus is a Shopify development agency and Shopify Partner. We design, build and grow Shopify and Shopify Plus stores for brands in India, Kuwait, the GCC, the United Kingdom and the United States, and we build iOS and Android mobile apps for e-commerce, grocery and delivery businesses.

Contact: info@perfictus.com · +91-7708621961 (India) · +965-60360675 (Kuwait) · ${SITE}/contact

## Services
- [Shopify Development](${SITE}/shopify-development): store setup, custom Shopify themes (Liquid, Online Store 2.0), Shopify Plus, checkout extensibility, Shopify Functions, migrations from WooCommerce/Magento/BigCommerce without losing SEO, custom Shopify apps, Shopify SEO and speed optimisation.
- [Mobile App Development](${SITE}/mobile-app-development): cross-platform iOS and Android apps, Shopify-connected shopping apps, grocery and delivery apps, payment gateways (MyFatoorah, KNET, Apple Pay, Google Pay), App Store and Google Play publishing.
- [All services](${SITE}/service): also SEO, digital marketing, marketplace and aggregator setup, remote developers, graphic design and video editing.

## Company
- [Portfolio](${SITE}/portfolio): Shopify stores (Tingle Tots – India, Boba Tea – UK, The Mom Chic – USA) and the Yamama Asian Mart app (Kuwait).
- [Client reviews](${SITE}/client-reviews): rated 5.0 on Google.
- [About](${SITE}/about) · [Careers](${SITE}/careers) · [Contact](${SITE}/contact)

## Blog
${posts.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.description}`).join('\n')}
`);

console.log(`SEO files: sitemap.xml (${pages.length} URLs), feed.xml (${posts.length} posts), llms.txt`);
