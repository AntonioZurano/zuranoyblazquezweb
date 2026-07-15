import type { Locale } from '@apptypes/locale';
import type { ContactFormConfig, FooterLinks, ServiceItem, SiteConfig } from '@apptypes/site';

export const site: SiteConfig = {
  name: 'Zurano y Blazquez',
  legalName: 'ZURANO Y BLAZQUEZ, S.L.',
  cif: 'B30571939',
  domain: 'zuranoyblazquez.com',
  url: 'https://zuranoyblazquez.com',
  tagline: 'Soluciones digitales para empresas',
  description:
    'Ayudamos a pymes, autónomos y empresas a digitalizarse con Microsoft 365, STEL Order, páginas web, dominios, hosting, correo profesional y soporte tecnológico cercano.',
  email: 'info@zuranoyblazquez.com',
  phone: '+34 617 414 350',
  phoneHref: '+34617414350',
  address: 'LORCA (MURCIA), C.P. 30813, CAMINO LA NORIA Nº 8 DIPUTACION LA ESCUCHA',
  legalAddress: {
    es: 'LORCA (MURCIA), C.P. 30813, CAMINO LA NORIA Nº 8 DIPUTACION LA ESCUCHA',
    en: 'LORCA (MURCIA), C.P. 30813, CALLE CAMINO LA NORIA Nº 8 DIPUTACION LA ESCUCHA',
  },
  postalAddress: {
    streetAddress: 'Camino La Noria, n.º 8, Diputación de La Escucha',
    postalCode: '30813',
    addressLocality: 'Lorca',
    addressRegion: 'Murcia',
    addressCountry: 'ES',
  },
  schedule: 'Lunes a viernes, 9:00 – 18:00',
};

function buildFormsubmitEndpoint(recipient: string): string {
  return `https://formsubmit.co/${recipient}`;
}

/** Configuración del formulario de contacto según idioma (Formsubmit.co). */
export function getContactFormConfig(locale: Locale): ContactFormConfig {
  const recipient = site.email;
  const endpoint = buildFormsubmitEndpoint(recipient);

  if (locale === 'en') {
    return {
      recipient,
      endpoint,
      redirectTo: `${site.url}/en/thank-you/`,
      subject: 'New enquiry from zuranoyblazquez.com',
    };
  }

  return {
    recipient,
    endpoint,
    redirectTo: `${site.url}/gracias/`,
    subject: 'Nueva consulta desde zuranoyblazquez.com',
  };
}

export const services: ServiceItem[] = [
  {
    title: 'Microsoft 365',
    slug: 'microsoft-365',
    href: '/servicios/microsoft-365/',
    icon: 'microsoft',
    summary:
      'Correo profesional, Teams, Office y almacenamiento en la nube con licencias gestionadas y soporte en español.',
  },
  {
    title: 'STEL Order',
    slug: 'stel-order',
    href: '/servicios/stel-order/',
    icon: 'invoice',
    summary:
      'Software de gestión, facturación y ventas para autónomos y pymes. Implantación, formación y acompañamiento.',
  },
  {
    title: 'Páginas web',
    slug: 'paginas-web',
    href: '/servicios/paginas-web/',
    icon: 'web',
    summary:
      'Diseño y desarrollo de webs rápidas, responsive y optimizadas para SEO que transmiten confianza y generan clientes.',
  },
  {
    title: 'Dominios, hosting y correo',
    slug: 'dominios-hosting-correo',
    href: '/servicios/dominios-hosting-correo/',
    icon: 'server',
    summary:
      'Registro de dominios, alojamiento fiable y correo profesional con tu propio dominio. Todo gestionado por nosotros.',
  },
  {
    title: 'Soporte tecnológico',
    slug: 'soporte-tecnologico',
    href: '/servicios/soporte-tecnologico/',
    icon: 'support',
    summary:
      'Asistencia técnica cercana y mantenimiento proactivo para que tu tecnología funcione sin interrupciones.',
  },
  {
    title: 'Soluciones para empresas',
    slug: 'soluciones-para-empresas',
    href: '/servicios/soluciones-para-empresas/',
    icon: 'enterprise',
    summary:
      'Proyectos de digitalización a medida que combinan nuestros servicios para resolver las necesidades reales de tu negocio.',
  },
];

export const footerLinks: FooterLinks = {
  servicios: services.map((s) => ({ label: s.title, href: s.href })),
  empresa: [
    { label: 'Sobre nosotros', href: '/empresa/' },
    { label: 'Servicios', href: '/servicios/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contacto', href: '/contacto/' },
  ],
  legal: [
    { label: 'Aviso legal', href: '/aviso-legal/' },
    { label: 'Política de privacidad', href: '/politica-de-privacidad/' },
    { label: 'Política de cookies', href: '/politica-de-cookies/' },
  ],
};
