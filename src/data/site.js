// Configuración central del sitio. Centralizar estos datos facilita el
// mantenimiento: cambiar un teléfono, un email o un enlace se hace en un
// único lugar y se propaga a toda la web.

export const site = {
  name: 'Zurano y Blazquez',
  legalName: 'Zurano y Blazquez',
  domain: 'zuranoyblazquez.com',
  url: 'https://zuranoyblazquez.com',
  tagline: 'Soluciones digitales para empresas',
  description:
    'Ayudamos a pymes, autónomos y empresas a digitalizarse con Microsoft 365, STEL Order, páginas web, dominios, hosting, correo profesional y soporte tecnológico cercano.',
  email: 'info@zuranoyblazquez.com',
  phone: '+34 600 000 000',
  phoneHref: '+34600000000',
  address: 'España',
  schedule: 'Lunes a viernes, 9:00 – 18:00',
};

// Configuración del formulario de contacto.
// Usamos Formsubmit.co como solución sencilla sin backend para la primera
// versión. Para cambiar el correo de destino, edita `recipient`.
//
// IMPORTANTE (producción):
//   1. El primer envío genera un correo de activación a `recipient`; hay que
//      confirmarlo una sola vez.
//   2. Tras activarlo, se recomienda sustituir `endpoint` por el alias que
//      ofrece Formsubmit (p. ej. 'https://formsubmit.co/el/xxxxxxx') para no
//      exponer el correo real en el HTML público.
export const contactForm = {
  recipient: site.email,
  get endpoint() {
    return `https://formsubmit.co/${this.recipient}`;
  },
  // URL a la que se redirige tras un envío correcto.
  redirectTo: `${site.url}/gracias/`,
  subject: 'Nueva consulta desde zuranoyblazquez.com',
};

// Navegación principal del Header.
export const mainNav = [
  { label: 'Inicio', href: '/' },
  { label: 'Empresa', href: '/empresa/' },
  {
    label: 'Servicios',
    href: '/servicios/',
    children: [
      { label: 'Microsoft 365', href: '/servicios/microsoft-365/' },
      { label: 'STEL Order', href: '/servicios/stel-order/' },
      { label: 'Páginas web', href: '/servicios/paginas-web/' },
      { label: 'Dominios, hosting y correo', href: '/servicios/dominios-hosting-correo/' },
      { label: 'Soporte tecnológico', href: '/servicios/soporte-tecnologico/' },
      { label: 'Soluciones para empresas', href: '/servicios/soluciones-para-empresas/' },
    ],
  },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/contacto/' },
];

// Catálogo de servicios. Se reutiliza en Inicio, Servicios y Footer.
export const services = [
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

// Enlaces agrupados para el Footer.
export const footerLinks = {
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
