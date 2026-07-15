import type { Locale } from '@apptypes/locale';
import {
  getBlogPostAlternateRoute,
  getBlogPostAlternateUrls,
  isBlogPostPath,
} from '@i18n/blog';

/** Normaliza una ruta con barra final (excepto raíz). */
export function normalizePath(path: string): string {
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
} as const satisfies Record<string, string>;

/** Mapa inglés → español (generado a partir del mapa principal). */
export const routeMapEnToEs: Record<string, string> = Object.fromEntries(
  Object.entries(routeMapEsToEn).map(([es, en]) => [en, es])
);

/** Detecta el idioma a partir de la ruta actual. */
export function getLocaleFromPath(pathname: string): Locale {
  return normalizePath(pathname).startsWith('/en/') || pathname === '/en' ? 'en' : 'es';
}

/** Devuelve la ruta equivalente en el idioma indicado. */
export function getAlternateRoute(pathname: string, targetLocale: Locale): string {
  const path = normalizePath(pathname);
  const currentLocale = getLocaleFromPath(pathname);

  if (isBlogPostPath(path)) {
    return getBlogPostAlternateRoute(path, targetLocale);
  }

  if (currentLocale === targetLocale) {
    return path;
  }

  if (targetLocale === 'en') {
    return routeMapEsToEn[path as keyof typeof routeMapEsToEn] ?? '/en/';
  }
  return routeMapEnToEs[path] ?? '/';
}

export interface AlternateUrls {
  es: string;
  en: string;
}

/** URLs absolutas para hreflang (requiere site.url). */
export function getAlternateUrls(pathname: string, siteUrl: string): AlternateUrls {
  const path = normalizePath(pathname);
  const locale = getLocaleFromPath(path);
  const base = siteUrl.replace(/\/$/, '');

  const blogAlternates = getBlogPostAlternateUrls(path, siteUrl);
  if (blogAlternates) {
    return blogAlternates;
  }

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
