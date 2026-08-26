// Pós-build: pré-renderiza dist/index.html com o conteúdo já no HTML,
// para que robôs (Google AdsBot, buscadores) leiam a página sem depender
// de JavaScript. Sobe um servidor estático próprio e usa Playwright.
//
// Uso:  npm run build  &&  npm run prerender
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const DIST = new URL('./dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = 8129;

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain', '.json': 'application/json',
};

const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p === '/' || p === '') p = '/index.html';
    const file = join(DIST, normalize(p));
    const buf = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(buf);
  } catch {
    res.writeHead(404); res.end('not found');
  }
});

await new Promise((r) => server.listen(PORT, '127.0.0.1', r));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForFunction(() => document.getElementById('root')?.children.length > 0, { timeout: 15000 });
await page.waitForTimeout(1500);

const html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML);
await writeFile(join(DIST, 'index.html'), html, 'utf8');

await browser.close();
server.close();
console.log(`Pré-renderizado dist/index.html (${html.length} bytes).`);
