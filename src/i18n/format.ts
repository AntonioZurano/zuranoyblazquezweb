import type { Locale } from '@apptypes/locale';

const DATE_LOCALES: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en-GB',
};

/** Formatea una fecha según el idioma de la interfaz. */
export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(DATE_LOCALES[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
