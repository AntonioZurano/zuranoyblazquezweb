import { privacyPolicyClauseVersion } from '@i18n/legal/privacy-policy';
import type { Locale } from '@apptypes/locale';

export interface ContactFormConsent {
  clauseVersion: string;
  formId: string;
  acceptanceValue: string;
}

export function getContactFormConsent(locale: Locale): ContactFormConsent {
  if (locale === 'en') {
    return {
      clauseVersion: privacyPolicyClauseVersion,
      formId: 'contact-en',
      acceptanceValue: 'yes',
    };
  }

  return {
    clauseVersion: privacyPolicyClauseVersion,
    formId: 'contacto-es',
    acceptanceValue: 'si',
  };
}
