import { copyFile, cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const [platform, target] = process.argv.slice(2);
if (!['windows', 'ios'].includes(platform) || !target) {
  throw new Error('Usage: node platforms/prepare-web.mjs <windows|ios> <output directory>');
}
const source = fileURLToPath(new URL('../web/', import.meta.url));
const output = resolve(target);
const index = await readFile(resolve(source, 'index.html'), 'utf8');
const moduleScript = '<script type="module" src="./app.mjs"></script>';
if (!index.includes(moduleScript)) throw new Error('The app entry point moved. Update the native asset preparation script.');
const offlinePolicy = platform === 'windows'
  ? "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; base-uri 'none'; form-action 'none'\">\n  "
  : '';

await mkdir(output, { recursive: true });
await Promise.all([
  build({
    entryPoints: [resolve(source, 'app.mjs')],
    outfile: resolve(output, 'app.js'),
    bundle: true,
    format: 'iife',
    define: platform === 'ios' ? { localStorage: 'window.openingLabStorage' } : {},
    target: ['safari16.4', 'edge109'],
    minifyWhitespace: true,
  }),
  copyFile(resolve(source, 'style.css'), resolve(output, 'style.css')),
  cp(resolve(source, 'pieces'), resolve(output, 'pieces'), { recursive: true }),
  writeFile(resolve(output, 'index.html'), index.replace(moduleScript, offlinePolicy + '<script defer src="./app.js"></script>')),
]);
