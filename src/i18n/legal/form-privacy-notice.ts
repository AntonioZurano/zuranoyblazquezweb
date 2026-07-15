import { site } from '@data/site.js';
import type { Locale } from '@apptypes/locale';

export interface FormPrivacyNoticeItem {
  label: string;
  text: string;
}

export interface FormPrivacyNoticeCopy {
  title: string;
  items: FormPrivacyNoticeItem[];
  additionalInfoBefore: string;
  additionalInfoLink: string;
  additionalInfoAfter: string;
  privacyPolicyHref: string;
}

export function getFormPrivacyNoticeCopy(locale: Locale): FormPrivacyNoticeCopy {
  const { legalName, cif } = site;

  if (locale === 'en') {
    return {
      title: 'Basic information on data protection',
      items: [
        {
          label: 'Controller:',
          text: `${legalName}, VAT number ${cif}.`,
        },
        {
          label: 'Purpose:',
          text: 'To handle and respond to your enquiry, information request or quote and, where applicable, to apply pre-contractual measures or manage contracted services.',
        },
        {
          label: 'Legal basis:',
          text: 'Consent of the data subject, application of pre-contractual measures and performance of a contract, as applicable.',
        },
        {
          label: 'Retention:',
          text: 'Data will be kept for as long as necessary to handle and follow up on the request and, subsequently, for the periods required to comply with legal obligations or address potential liabilities.',
        },
        {
          label: 'Recipients:',
          text: 'Data will not be disclosed to third parties except where required by law or where necessary to handle or provide the service. Technology providers acting as processors may have access, including hosting and email service providers.',
        },
        {
          label: 'Rights:',
          text: 'You may exercise your rights of access, rectification, erasure, objection, restriction and portability, and withdraw your consent, by writing to ',
        },
      ],
      additionalInfoBefore: 'Further information: See the full ',
      additionalInfoLink: 'Privacy Policy',
      additionalInfoAfter: ' (official version in Spanish).',
      privacyPolicyHref: '/politica-de-privacidad/',
    };
  }

  return {
    title: 'Información básica sobre protección de datos',
    items: [
      {
        label: 'Responsable:',
        text: `${legalName}, CIF ${cif}.`,
      },
      {
        label: 'Finalidad:',
        text: 'Atender y responder su consulta, solicitud de información o presupuesto y, cuando corresponda, aplicar medidas precontractuales o gestionar los servicios contratados.',
      },
      {
        label: 'Legitimación:',
        text: 'Consentimiento del interesado, aplicación de medidas precontractuales y ejecución de un contrato, según corresponda.',
      },
      {
        label: 'Conservación:',
        text: 'Los datos se conservarán durante el tiempo necesario para atender y realizar el seguimiento de la solicitud y, posteriormente, durante los plazos necesarios para cumplir obligaciones legales o atender posibles responsabilidades.',
      },
      {
        label: 'Destinatarios:',
        text: 'Los datos no se comunicarán a terceros salvo obligación legal o cuando resulte necesario para atender o prestar el servicio. Podrán acceder a ellos proveedores tecnológicos que actúen como encargados del tratamiento, incluidos los proveedores de alojamiento y correo electrónico.',
      },
      {
        label: 'Derechos:',
        text: 'Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad, así como retirar su consentimiento, escribiendo a ',
      },
    ],
    additionalInfoBefore: 'Información adicional: Consulte la información completa en la ',
    additionalInfoLink: 'Política de Privacidad',
    additionalInfoAfter: '.',
    privacyPolicyHref: '/politica-de-privacidad/',
  };
}
