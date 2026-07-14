import type { Locale } from './locale';

export interface SelectOption {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export interface ThemeToggleUi {
  dark: string;
  light: string;
}

export interface BlogPostUi {
  backToBlog: string;
  readArticle: string;
  byAuthor: string;
  updatedOn: string;
}

export interface BlogIndexUi {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  empty: string;
  pendingNote: string;
  ctaTitle: string;
  ctaText: string;
}

export interface FooterUi {
  servicesTitle: string;
  companyTitle: string;
  legalTitle: string;
  aboutUs: string;
  services: string;
  blog: string;
  contact: string;
  legalNotice: string;
  privacyPolicy: string;
  cookiesPolicy: string;
  copyright: string;
}

export interface ServiceDetailUi {
  primaryCta: string;
  secondaryCta: string;
  contactHref: string;
  servicesHref: string;
  introEyebrow: string;
  benefitsTitle: string;
  featuresEyebrow: string;
  featuresTitle: string;
  faqEyebrow: string;
  faqTitle: string;
}

export interface CtaUi {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
}

export interface ContactUi {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  infoTitle: string;
  infoIntro: string;
  emailLabel: string;
  phoneLabel: string;
  scheduleLabel: string;
  formTitle: string;
  formIntro: string;
  nameLabel: string;
  companyLabel: string;
  emailFieldLabel: string;
  phoneFieldLabel: string;
  serviceLabel: string;
  servicePlaceholder: string;
  messageLabel: string;
  privacyLabel: string;
  privacyLink: string;
  privacyHref: string;
  submit: string;
  honeypotLabel: string;
  services: SelectOption[];
}

export interface ThankYouUi {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCta: string;
  secondaryCta: string;
  urgent: string;
}

export interface NotFoundUi {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCta: string;
  secondaryCta: string;
  englishHome?: string;
  spanishHome?: string;
}

export interface LocaleUi {
  skipLink: string;
  tagline: string;
  siteDescription: string;
  schedule: string;
  brandHome: string;
  langSwitcherLabel: string;
  navToggleOpen: string;
  navToggleClose: string;
  navAria: string;
  navContact: string;
  mainNav: NavItem[];
  footer: FooterUi;
  serviceCard: { readMore: string };
  serviceDetail: ServiceDetailUi;
  cta: CtaUi;
  contact: ContactUi;
  thankYou: ThankYouUi;
  notFound: NotFoundUi;
  themeToggle: ThemeToggleUi;
  blogPost: BlogPostUi;
  blogIndex: BlogIndexUi;
}

export type UiDictionary = Record<Locale, LocaleUi>;
