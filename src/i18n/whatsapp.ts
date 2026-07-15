import { site } from '@data/site.js';
import { getUi } from '@i18n/ui';
import type { Locale } from '@apptypes/locale';

// Construye el enlace oficial wa.me con el mensaje predefinido del idioma.
// El número se deriva de `site.phoneHref` eliminando todo lo que no sea dígito
// (p. ej. `+34617414350` -> `34617414350`), evitando duplicar el dato.
export function getWhatsAppHref(locale: Locale): string {
  const phone = site.phoneHref.replace(/\D/g, '');
  const message = getUi(locale).whatsapp.message;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
