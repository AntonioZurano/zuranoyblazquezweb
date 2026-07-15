import type { CollectionEntry } from 'astro:content';
import type { Locale } from '@apptypes/locale';
import { normalizePath } from '@i18n/routes';

export type BlogPost = CollectionEntry<'blog'>;

/** Rutas ES/EN por clave de traducción (fuente única para el selector de idioma). */
export const blogTranslationRoutes = {
  'sme-digitalisation': {
    es: '/blog/que-necesita-una-pyme-para-empezar-su-digitalizacion/',
    en: '/en/blog/what-an-sme-needs-to-start-its-digital-transformation/',
  },
  'microsoft-365-plan': {
    es: '/blog/microsoft-365-para-empresas-que-plan-elegir/',
    en: '/en/blog/microsoft-365-for-business-which-plan-to-choose/',
  },
  'stel-order-management': {
    es: '/blog/stel-order-gestion-comercial-para-autonomos-y-pymes/',
    en: '/en/blog/stel-order-commercial-management-for-freelancers-and-smes/',
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type BlogTranslationKey = keyof typeof blogTranslationRoutes;

const blogPathToKey = new Map<string, BlogTranslationKey>(
  Object.entries(blogTranslationRoutes).flatMap(([key, routes]) => [
    [routes.es, key as BlogTranslationKey],
    [routes.en, key as BlogTranslationKey],
  ])
);

/** Extrae el slug público del identificador de colección (`es/slug` o `en/slug`). */
export function getPostSlug(post: BlogPost): string {
  const parts = post.id.split('/');
  return parts[parts.length - 1] ?? post.id;
}

/** URL pública del artículo según su idioma. */
export function getPostHref(post: BlogPost): string {
  const slug = getPostSlug(post);
  return post.data.lang === 'en' ? `/en/blog/${slug}/` : `/blog/${slug}/`;
}

/** Filtra artículos publicados por idioma. */
export function getPostsByLocale(posts: BlogPost[], locale: Locale): BlogPost[] {
  return posts.filter((post) => post.data.lang === locale && !post.data.draft);
}

/** Comprueba si la ruta es un artículo del blog (ES o EN). */
export function isBlogPostPath(pathname: string): boolean {
  const path = normalizePath(pathname);
  return (
    (path.startsWith('/blog/') && path !== '/blog/') ||
    (path.startsWith('/en/blog/') && path !== '/en/blog/')
  );
}

/** Ruta equivalente de un artículo; si no hay traducción, devuelve el índice del blog. */
export function getBlogPostAlternateRoute(pathname: string, targetLocale: Locale): string {
  const path = normalizePath(pathname);
  const fallback = targetLocale === 'en' ? '/en/blog/' : '/blog/';
  const key = blogPathToKey.get(path);
  if (!key) return fallback;
  return blogTranslationRoutes[key][targetLocale];
}

/** URLs absolutas hreflang para artículos del blog. */
export function getBlogPostAlternateUrls(
  pathname: string,
  siteUrl: string
): { es: string; en: string } | null {
  const path = normalizePath(pathname);
  const key = blogPathToKey.get(path);
  if (!key) return null;
  const base = siteUrl.replace(/\/$/, '');
  const routes = blogTranslationRoutes[key];
  return {
    es: `${base}${routes.es}`,
    en: `${base}${routes.en}`,
  };
}
