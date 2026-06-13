// @ts-check
import { defineConfig } from 'astro/config';

// Configuración del proyecto. El `site` se usa para generar URLs absolutas
// en el sitemap (endpoint nativo en src/pages/sitemap.xml.ts) y en las
// etiquetas canónicas SEO.
export default defineConfig({
  site: 'https://zuranoyblazquez.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
