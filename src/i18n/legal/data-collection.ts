import { getLegalAddress, site } from '@data/site.ts';
import type { Locale } from '@types/locale';

export interface DataCollectionCopy {
  sectionTitle: string;
  bodyParagraphs: [string, string, string];
  rightsParagraphBeforeEmail: string;
  rightsParagraphAfterEmail: string;
  marketingConsentLegend: string;
  marketingYes: string;
  marketingNo: string;
}

export function getDataCollectionCopy(locale: Locale): DataCollectionCopy {
  const address = getLegalAddress(locale);
  const { legalName, cif, email } = site;

  if (locale === 'en') {
    return {
      sectionTitle: 'Data collection on the website (LSSICE + LOPD Spanish Laws)',
      bodyParagraphs: [
        `In compliance with the Data Protection General Regulation (EU) 2016/679 of the European Parliament and the Council, on the 27th April 2016 and Organic Law 3/2018 of December 5th on Personal Data Protection and Guarantee of Digital Rights, we inform you that the provided personal data will be processed by ${legalName} with VAT number ${cif}, addressed in ${address}, to provide the requested service, and make the billing of it.`,
        'The legal basis for the processing of your personal data is the execution of the contracted service. The future offer of products and services will be based on the requested consent, and in the case of the withdrawal of this consent, this would never condition the execution of the contract.',
        'The data provided will be kept as long as the commercial relationship is maintained or during the years necessary to comply with the legal obligations. The data will not be transferred to third parties except in cases where there is a legal obligation.',
      ],
      rightsParagraphBeforeEmail: `You have the right to obtain confirmation of whether or not we are treating your personal data under ${legalName} and therefore you have the right to exercise your rights of access, rectification, treatment limitation, portability, opposition to treatment and suppression of your data by writing to the address postal mentioned above or electronic account `,
      rightsParagraphAfterEmail:
        ', attached mail copy of the ID in both cases, as well as the right to file a claim with the Control Authority (',
      marketingConsentLegend:
        'We also request authorization to offer you products and services related to those requested, executed and/or marketed by our company enabling us to keep you as a client.',
      marketingYes: 'Yes',
      marketingNo: 'No',
    };
  }

  return {
    sectionTitle: 'Recogida de datos en página web (LSSICE + LOPD)',
    bodyParagraphs: [
      `En cumplimiento del Reglamento General de Protección de Datos (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 y la ley orgánica 3/2018 de 5 de diciembre de Protección de Datos Personales y de Garantía de los Derechos Digitales le informamos que los datos por Vd. proporcionados serán objeto de tratamiento por parte de ${legalName} con CIF ${cif}, con domicilio en ${address}, con la finalidad de prestarle el servicio solicitado y/o contratado, realizar la facturación del mismo.`,
      'La base legal para el tratamiento de sus datos es la ejecución del servicio por usted contratado y/o solicitado. La oferta prospectiva de productos y servicios está basada en el consentimiento que se le solicita, sin que en ningún caso la retirada de este consentimiento condicione la ejecución del contrato.',
      'Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal.',
    ],
    rightsParagraphBeforeEmail: `Usted tiene derecho a obtener confirmación sobre si en ${legalName} estamos tratando sus datos personales y por tanto tiene derecho a ejercer sus derechos de acceso, rectificación, limitación del tratamiento, portabilidad, oposición al tratamiento y supresión de sus datos mediante escrito dirigido a la dirección postal arriba mencionada o electrónica `,
    rightsParagraphAfterEmail:
      ', adjuntando copia del DNI en ambos casos, así como el derecho a presentar una reclamación ante la Autoridad de Control (',
    marketingConsentLegend:
      'Asimismo le solicitamos su autorización para ofrecerle productos y servicios relacionados con los solicitados, prestados y/o comercializados por nuestra entidad y poder de esa forma fidelizarle como cliente.',
    marketingYes: 'Sí',
    marketingNo: 'No',
  };
}
