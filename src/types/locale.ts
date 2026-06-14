export type Locale = 'es' | 'en';

export const LOCALES: readonly Locale[] = ['es', 'en'];

export function isLocale(value: string): value is Locale {
  return value === 'es' || value === 'en';
}
