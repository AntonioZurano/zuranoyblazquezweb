// Genera public/og-default.png (1200x630) a partir de public/og-default.svg.
// Las redes sociales no renderizan SVG de forma fiable, por lo que se sirve
// una versión raster como imagen Open Graph por defecto.
// Uso: node scripts/generate-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const input = resolve(root, 'public/og-default.svg');
const output = resolve(root, 'public/og-default.png');

await sharp(input, { density: 200 })
  .resize(1200, 630, { fit: 'cover' })
  .png()
  .toFile(output);

console.log(`OG image generada: ${output}`);
