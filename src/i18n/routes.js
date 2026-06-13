// Mapeo centralizado de rutas ES ↔ EN.
// Las rutas españolas reales usan /servicios/<slug>/; las inglesas van bajo /en/.

/** Normaliza una ruta con barra final (excepto raíz). */
export function normalizePath(path) {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

/** Mapa español → inglés. */
export const routeMapEsToEn = {
  '/': '/en/',
  '/empresa/': '/en/company/',
  '/servicios/': '/en/services/',
  '/servicios/microsoft-365/': '/en/microsoft-365/',
  '/servicios/stel-order/': '/en/stel-order/',
  '/servicios/paginas-web/': '/en/websites/',
  '/servicios/dominios-hosting-correo/': '/en/domains-hosting-email/',
  '/servicios/soporte-tecnologico/': '/en/technology-support/',
  '/servicios/soluciones-para-empresas/': '/en/business-solutions/',
  '/blog/': '/en/blog/',
  '/contacto/': '/en/contact/',
  '/gracias/': '/en/thank-you/',
  '/aviso-legal/': '/en/legal-notice/',
  '/politica-de-privacidad/': '/en/privacy-policy/',
  '/politica-de-cookies/': '/en/cookies-policy/',
};

/** Mapa inglés → español (generado a partir del mapa principal). */
export const routeMapEnToEs = Object.fromEntries(
  Object.entries(routeMapEsToEn).map(([es, en]) => [en, es])
);

/** Detecta el idioma a partir de la ruta actual. */
export function getLocaleFromPath(pathname) {
  return normalizePath(pathname).startsWith('/en/') || pathname === '/en' ? 'en' : 'es';
}

/** Devuelve la ruta equivalente en el idioma indicado. */
export function getAlternateRoute(pathname, targetLocale) {
  const path = normalizePath(pathname);
  const currentLocale = getLocaleFromPath(pathname);

  // Artículos del blog: por ahora solo existe versión en español.
  if (path.startsWith('/blog/') && path !== '/blog/') {
    return targetLocale === 'en' ? '/en/blog/' : '/blog/';
  }

  // Mismo idioma: mantener la ruta actual.
  if (currentLocale === targetLocale) {
    return path;
  }

  if (targetLocale === 'en') {
    return routeMapEsToEn[path] ?? '/en/';
  }
  return routeMapEnToEs[path] ?? '/';
}

/** URLs absolutas para hreflang (requiere site.url). */
export function getAlternateUrls(pathname, siteUrl) {
  const path = normalizePath(pathname);
  const locale = getLocaleFromPath(path);
  const base = siteUrl.replace(/\/$/, '');

  if (locale === 'en') {
    const esPath = getAlternateRoute(path, 'es');
    return {
      es: `${base}${esPath === '/' ? '/' : esPath}`,
      en: `${base}${path}`,
    };
  }

  const enPath = getAlternateRoute(path, 'en');
  return {
    es: `${base}${path === '/' ? '/' : path}`,
    en: `${base}${enPath}`,
  };
}
