// scripts/prerender.js
import puppeteer from 'puppeteer';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';

const routes = ['/', '/about', '/projects', '/projects/mosaic', '/projects/pollen'];

const server = await preview({ preview: { port: 4173 } });
const browser = await puppeteer.launch();
const page = await browser.newPage();

for (const route of routes) {
    await page.goto(`http://localhost:4173${route}`, { waitUntil: 'networkidle0' });
    const html = await page.content();

    const outDir = route === '/' ? 'dist' : path.join('dist', route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
}

await browser.close();
server.httpServer.close();