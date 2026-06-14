import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '@data/site.js';
import { getPostHref } from '@i18n/blog';

// Sitemap generado de forma nativa, sin dependencias externas.
// Descubre automáticamente todas las páginas .astro de `src/pages` y las
// convierte en URLs, excluyendo las páginas que no deben indexarse.
// Las rutas dinámicas (con [param]) se omiten aquí y se añaden a partir
// de sus colecciones (p. ej. los artículos del blog).
// Compatible con cualquier versión de Astro (no usa hooks de integración).

// `eager: true` carga los módulos en build para poder enumerar las rutas.
const pageModules = import.meta.glob('./**/*.astro', { eager: true });

// Rutas que NO deben aparecer en el sitemap (coinciden con las marcadas
// como noindex en sus páginas).
const EXCLUDED = new Set<string>([
  '/404/',
  '/gracias/',
  '/aviso-legal/',
  '/politica-de-privacidad/',
  '/politica-de-cookies/',
  '/en/thank-you/',
  '/en/legal-notice/',
  '/en/privacy-policy/',
  '/en/cookies-policy/',
]);

/** Convierte la ruta de un archivo de página en una URL con barra final. */
function filePathToRoute(filePath: string): string {
  let path = filePath.replace(/^\.\//, '').replace(/\.astro$/, '');
  // `index` representa la raíz de su carpeta.
  if (path === 'index') return '/';
  if (path.endsWith('/index')) path = path.slice(0, -'/index'.length);
  return `/${path}/`;
}

/** Prioridad y frecuencia de cambio según el tipo de página (heurística SEO). */
function seoHints(route: string): { priority: string; changefreq: string } {
  if (route === '/') return { priority: '1.0', changefreq: 'weekly' };
  if (route === '/en/') return { priority: '0.9', changefreq: 'weekly' };
  if (route === '/servicios/' || route === '/en/services/') return { priority: '0.9', changefreq: 'monthly' };
  if (route.startsWith('/servicios/') || route.startsWith('/en/')) return { priority: '0.8', changefreq: 'monthly' };
  if (route === '/blog/' || route === '/en/blog/') return { priority: '0.7', changefreq: 'weekly' };
  return { priority: '0.6', changefreq: 'monthly' };
}

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString().split('T')[0];

  // Rutas estáticas (se omiten las plantillas dinámicas con [param]).
  const staticRoutes = Object.keys(pageModules)
    .filter((file) => !file.includes('['))
    .map(filePathToRoute)
    .filter((route) => !EXCLUDED.has(route));

  // Artículos del blog publicados.
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const blogRoutes = posts.map((post) => getPostHref(post));

  const routes = Array.from(new Set([...staticRoutes, ...blogRoutes])).sort();

  const urls = routes
    .map((route) => {
      const { priority, changefreq } = seoHints(route);
      const loc = new URL(route, site.url).href;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
