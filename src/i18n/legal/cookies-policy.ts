import type { Locale } from '@apptypes/locale';
import type { LegalSection } from '@apptypes/legal';

const cookiesPolicyEs: LegalSection[] = [
  {
    title: '1. Identificación del titular',
    blocks: [
      {
        type: 'p',
        text: 'El titular de este sitio web es:',
      },
      { type: 'labeled', label: 'Titular:', text: 'ZURANO Y BLAZQUEZ, S.L.' },
      { type: 'labeled', label: 'CIF:', text: 'B30571939' },
      {
        type: 'labeled',
        label: 'Domicilio social:',
        text: 'Camino La Noria, n.º 8, Diputación de La Escucha, 30813 Lorca, Murcia',
      },
      { type: 'labeled', label: 'Teléfono:', text: '617 414 350' },
      { type: 'p-email', before: 'Correo electrónico: ', after: '' },
      {
        type: 'p-link',
        before: 'Sitio web: ',
        linkText: 'https://zuranoyblazquez.com',
        href: 'https://zuranoyblazquez.com',
        external: true,
      },
    ],
  },
  {
    title: '2. Uso de cookies y almacenamiento local',
    blocks: [
      {
        type: 'p',
        text: 'Este sitio web ha sido desarrollado con Astro y utiliza únicamente mecanismos técnicos de almacenamiento local del navegador, como `localStorage`, para recordar determinadas preferencias del usuario.',
      },
      {
        type: 'p',
        text: 'Actualmente, el sitio web:',
      },
      {
        type: 'ul',
        items: [
          'No utiliza cookies de análisis.',
          'No utiliza cookies publicitarias.',
          'No utiliza cookies de publicidad comportamental.',
          'No utiliza herramientas de seguimiento.',
          'No incorpora contenidos externos que instalen cookies.',
          'No utiliza Google Analytics, Meta Pixel, Microsoft Clarity ni servicios similares.',
          'No crea perfiles de navegación.',
          'No comparte información de navegación con terceros con fines publicitarios o analíticos.',
        ],
      },
    ],
  },
  {
    title: '3. ¿Qué es `localStorage`?',
    blocks: [
      {
        type: 'p',
        text: '`localStorage` es una función del navegador que permite almacenar pequeñas cantidades de información en el dispositivo del usuario.',
      },
      {
        type: 'p',
        text: 'A diferencia de las cookies, la información almacenada mediante `localStorage` no se envía automáticamente al servidor cada vez que el usuario visita una página.',
      },
      {
        type: 'p',
        text: 'En este sitio web puede utilizarse exclusivamente para recordar preferencias técnicas, como:',
      },
      {
        type: 'ul',
        items: ['El modo claro u oscuro (clave `zb-theme`).'],
      },
      {
        type: 'p',
        text: 'En la configuración actual del sitio web no se almacena ninguna otra preferencia en `localStorage`.',
      },
      {
        type: 'p',
        text: 'La información almacenada no se utiliza para identificar personalmente al usuario, realizar seguimiento de su navegación ni elaborar perfiles comerciales.',
      },
    ],
  },
  {
    title: '4. Finalidad del almacenamiento',
    blocks: [
      {
        type: 'p',
        text: 'El almacenamiento local utilizado por este sitio web tiene una finalidad exclusivamente técnica y funcional.',
      },
      {
        type: 'p',
        text: 'Su objetivo es mejorar la experiencia de navegación y recordar las opciones seleccionadas por el usuario para evitar que tenga que configurarlas de nuevo en cada visita.',
      },
      {
        type: 'p',
        text: 'No se utiliza con fines publicitarios, estadísticos, comerciales ni de seguimiento.',
      },
    ],
  },
  {
    title: '5. Base jurídica',
    blocks: [
      {
        type: 'p',
        text: 'El almacenamiento local utilizado es necesario para mantener las preferencias expresamente seleccionadas por el usuario y facilitar el funcionamiento del sitio web.',
      },
      {
        type: 'p',
        text: 'Al tratarse de una funcionalidad técnica y no utilizarse con fines de análisis, publicidad o seguimiento, no se requiere el consentimiento previo del usuario para su utilización.',
      },
      {
        type: 'p',
        text: 'Por este motivo, el sitio web no necesita mostrar un banner para aceptar o rechazar cookies no necesarias, mientras se mantenga la configuración descrita en esta política.',
      },
    ],
  },
  {
    title: '6. Información almacenada',
    blocks: [
      {
        type: 'p',
        text: 'La información que puede almacenarse en el navegador se limita a valores técnicos relacionados con las preferencias del usuario.',
      },
      {
        type: 'p',
        text: 'Por ejemplo:',
      },
      {
        type: 'table',
        headers: ['Elemento', 'Finalidad', 'Titular', 'Duración'],
        rows: [
          [
            'Preferencia de apariencia (`zb-theme`)',
            'Recordar el modo claro u oscuro elegido por el usuario',
            'Propia',
            'Hasta que el usuario la elimine o modifique',
          ],
        ],
      },
      {
        type: 'p',
        text: 'La denominación exacta de las claves almacenadas puede variar según la configuración técnica del sitio web.',
      },
    ],
  },
  {
    title: '7. Formularios de contacto',
    blocks: [
      {
        type: 'p',
        text: 'Los formularios del sitio web se utilizan para enviar consultas, solicitudes de información o peticiones de presupuesto por correo electrónico.',
      },
      {
        type: 'p',
        text: 'El funcionamiento de los formularios:',
      },
      {
        type: 'ul',
        items: [
          'No requiere cookies de análisis o publicidad.',
          'No almacena los mensajes en una base de datos propia del sitio web.',
          'No crea cuentas de usuario.',
          'No genera una suscripción a una newsletter.',
          'No utiliza los datos para crear perfiles publicitarios.',
        ],
      },
      {
        type: 'p-link',
        before:
          'El tratamiento de los datos enviados mediante los formularios se regula en la ',
        linkText: 'Política de Privacidad',
        href: '/politica-de-privacidad/',
        after: '.',
      },
    ],
  },
  {
    title: '8. Cómo eliminar el almacenamiento local',
    blocks: [
      {
        type: 'p',
        text: 'El usuario puede eliminar la información almacenada en `localStorage` desde la configuración de su navegador.',
      },
      {
        type: 'p',
        text: 'Esta opción suele encontrarse en los apartados de:',
      },
      {
        type: 'ul',
        items: [
          'Privacidad y seguridad.',
          'Cookies y datos de sitios.',
          'Datos de navegación.',
          'Almacenamiento del sitio.',
          'Permisos y datos guardados.',
        ],
      },
      {
        type: 'p',
        text: 'También puede eliminarse borrando los datos de navegación asociados a este sitio web.',
      },
      {
        type: 'p',
        text: 'La eliminación del almacenamiento local puede provocar que algunas preferencias, como el modo claro u oscuro, vuelvan a sus valores predeterminados.',
      },
    ],
  },
  {
    title: '9. Cambios futuros en el uso de cookies',
    blocks: [
      {
        type: 'p',
        text: 'Si en el futuro se incorporan herramientas de analítica, publicidad, seguimiento o contenidos externos que utilicen cookies no necesarias, esta Política de Cookies será actualizada antes de activar dichos servicios.',
      },
      {
        type: 'p',
        text: 'En ese caso, el sitio web incorporará un sistema de consentimiento que permita al usuario:',
      },
      {
        type: 'ul',
        items: [
          'Aceptar las cookies.',
          'Rechazar las cookies no necesarias.',
          'Configurarlas por categorías.',
          'Retirar posteriormente el consentimiento.',
        ],
      },
    ],
  },
  {
    title: '10. Actualización de la política',
    blocks: [
      {
        type: 'p',
        text: 'ZURANO Y BLAZQUEZ, S.L. podrá modificar esta Política de Cookies cuando cambie el funcionamiento técnico del sitio web o se incorporen nuevas herramientas.',
      },
      {
        type: 'p',
        text: 'Se recomienda revisar periódicamente esta página para conocer la versión vigente.',
      },
    ],
  },
  {
    title: '11. Contacto',
    blocks: [
      {
        type: 'p',
        text: 'Para cualquier consulta relacionada con esta Política de Cookies, el usuario puede contactar con:',
      },
      { type: 'labeled', label: 'Titular:', text: 'ZURANO Y BLAZQUEZ, S.L.' },
      { type: 'p-email', before: 'Correo electrónico: ', after: '' },
      { type: 'labeled', label: 'Teléfono:', text: '617 414 350' },
      {
        type: 'labeled',
        label: 'Dirección postal:',
        text: 'Camino La Noria, n.º 8, Diputación de La Escucha, 30813 Lorca, Murcia',
      },
    ],
  },
];

const cookiesPolicyEn: LegalSection[] = [
  {
    title: '1. Identity of the website owner',
    blocks: [
      {
        type: 'p',
        text: 'The owner of this website is:',
      },
      { type: 'labeled', label: 'Owner:', text: 'ZURANO Y BLAZQUEZ, S.L.' },
      { type: 'labeled', label: 'Tax ID (CIF):', text: 'B30571939' },
      {
        type: 'labeled',
        label: 'Registered office:',
        text: 'Camino La Noria, n.º 8, Diputación de La Escucha, 30813 Lorca, Murcia, Spain',
      },
      { type: 'labeled', label: 'Phone:', text: '617 414 350' },
      { type: 'p-email', before: 'Email: ', after: '' },
      {
        type: 'p-link',
        before: 'Website: ',
        linkText: 'https://zuranoyblazquez.com',
        href: 'https://zuranoyblazquez.com',
        external: true,
      },
    ],
  },
  {
    title: '2. Use of cookies and local storage',
    blocks: [
      {
        type: 'p',
        text: 'This website has been built with Astro and uses only technical browser local storage mechanisms, such as `localStorage`, to remember certain user preferences.',
      },
      {
        type: 'p',
        text: 'At present, the website:',
      },
      {
        type: 'ul',
        items: [
          'Does not use analytics cookies.',
          'Does not use advertising cookies.',
          'Does not use behavioural advertising cookies.',
          'Does not use tracking tools.',
          'Does not embed third-party content that installs cookies.',
          'Does not use Google Analytics, Meta Pixel, Microsoft Clarity or similar services.',
          'Does not create browsing profiles.',
          'Does not share browsing information with third parties for advertising or analytics purposes.',
        ],
      },
    ],
  },
  {
    title: '3. What is `localStorage`?',
    blocks: [
      {
        type: 'p',
        text: '`localStorage` is a browser feature that allows small amounts of information to be stored on the user’s device.',
      },
      {
        type: 'p',
        text: 'Unlike cookies, information stored via `localStorage` is not automatically sent to the server each time the user visits a page.',
      },
      {
        type: 'p',
        text: 'On this website it may be used exclusively to remember technical preferences, such as:',
      },
      {
        type: 'ul',
        items: ['Light or dark mode (`zb-theme` key).'],
      },
      {
        type: 'p',
        text: 'In the current configuration of the website, no other preferences are stored in `localStorage`.',
      },
      {
        type: 'p',
        text: 'The stored information is not used to personally identify the user, track their browsing or build commercial profiles.',
      },
    ],
  },
  {
    title: '4. Purpose of local storage',
    blocks: [
      {
        type: 'p',
        text: 'The local storage used by this website serves an exclusively technical and functional purpose.',
      },
      {
        type: 'p',
        text: 'Its aim is to improve the browsing experience and remember the options selected by the user so they do not have to configure them again on each visit.',
      },
      {
        type: 'p',
        text: 'It is not used for advertising, statistical, commercial or tracking purposes.',
      },
    ],
  },
  {
    title: '5. Legal basis',
    blocks: [
      {
        type: 'p',
        text: 'The local storage used is necessary to maintain the preferences expressly selected by the user and to support the operation of the website.',
      },
      {
        type: 'p',
        text: 'Because it is a technical functionality and is not used for analytics, advertising or tracking, prior user consent is not required for its use.',
      },
      {
        type: 'p',
        text: 'For this reason, the website does not need to display a banner to accept or reject non-essential cookies while the configuration described in this policy remains in place.',
      },
    ],
  },
  {
    title: '6. Stored information',
    blocks: [
      {
        type: 'p',
        text: 'The information that may be stored in the browser is limited to technical values related to user preferences.',
      },
      {
        type: 'p',
        text: 'For example:',
      },
      {
        type: 'table',
        headers: ['Item', 'Purpose', 'Owner', 'Duration'],
        rows: [
          [
            'Appearance preference (`zb-theme`)',
            'Remember the light or dark mode chosen by the user',
            'First-party',
            'Until the user deletes or changes it',
          ],
        ],
      },
      {
        type: 'p',
        text: 'The exact names of the stored keys may vary depending on the technical configuration of the website.',
      },
    ],
  },
  {
    title: '7. Contact forms',
    blocks: [
      {
        type: 'p',
        text: 'The website forms are used to send enquiries, information requests or quote requests by email.',
      },
      {
        type: 'p',
        text: 'How the forms work:',
      },
      {
        type: 'ul',
        items: [
          'They do not require analytics or advertising cookies.',
          'They do not store messages in a website database.',
          'They do not create user accounts.',
          'They do not subscribe users to a newsletter.',
          'They do not use the data to create advertising profiles.',
        ],
      },
      {
        type: 'p-link',
        before: 'The processing of data submitted through the forms is governed by the ',
        linkText: 'Privacy Policy',
        href: '/politica-de-privacidad/',
        after: ' (official version in Spanish).',
      },
    ],
  },
  {
    title: '8. How to delete local storage',
    blocks: [
      {
        type: 'p',
        text: 'Users can delete information stored in `localStorage` from their browser settings.',
      },
      {
        type: 'p',
        text: 'This option is usually found under:',
      },
      {
        type: 'ul',
        items: [
          'Privacy and security.',
          'Cookies and site data.',
          'Browsing data.',
          'Site storage.',
          'Permissions and stored data.',
        ],
      },
      {
        type: 'p',
        text: 'It can also be removed by clearing browsing data associated with this website.',
      },
      {
        type: 'p',
        text: 'Deleting local storage may cause some preferences, such as light or dark mode, to return to their default values.',
      },
    ],
  },
  {
    title: '9. Future changes to cookie use',
    blocks: [
      {
        type: 'p',
        text: 'If analytics, advertising, tracking tools or third-party content that uses non-essential cookies are added in the future, this Cookies Policy will be updated before those services are activated.',
      },
      {
        type: 'p',
        text: 'In that case, the website will include a consent mechanism allowing the user to:',
      },
      {
        type: 'ul',
        items: [
          'Accept cookies.',
          'Reject non-essential cookies.',
          'Configure them by category.',
          'Withdraw consent later.',
        ],
      },
    ],
  },
  {
    title: '10. Policy updates',
    blocks: [
      {
        type: 'p',
        text: 'ZURANO Y BLAZQUEZ, S.L. may amend this Cookies Policy when the technical operation of the website changes or new tools are incorporated.',
      },
      {
        type: 'p',
        text: 'We recommend reviewing this page periodically to see the current version.',
      },
    ],
  },
  {
    title: '11. Contact',
    blocks: [
      {
        type: 'p',
        text: 'For any questions about this Cookies Policy, you can contact:',
      },
      { type: 'labeled', label: 'Owner:', text: 'ZURANO Y BLAZQUEZ, S.L.' },
      { type: 'p-email', before: 'Email: ', after: '' },
      { type: 'labeled', label: 'Phone:', text: '617 414 350' },
      {
        type: 'labeled',
        label: 'Postal address:',
        text: 'Camino La Noria, n.º 8, Diputación de La Escucha, 30813 Lorca, Murcia, Spain',
      },
    ],
  },
];

export function getCookiesPolicySections(locale: Locale): LegalSection[] {
  return locale === 'en' ? cookiesPolicyEn : cookiesPolicyEs;
}

export const cookiesPolicyUpdated = {
  es: '14 de julio de 2026',
  en: '14 July 2026',
} as const;

export const cookiesPolicyUpdatedLabel = {
  es: 'Última actualización:',
  en: 'Last updated:',
} as const;
