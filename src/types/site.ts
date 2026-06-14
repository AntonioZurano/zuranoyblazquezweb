import type { Locale } from './locale';

export interface SiteConfig {
  name: string;
  legalName: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  phoneHref: string;
  address: string;
  schedule: string;
}

export interface ContactFormConfig {
  recipient: string;
  endpoint: string;
  redirectTo: string;
  subject: string;
}

export interface ServiceItem {
  title: string;
  slug: string;
  href: string;
  icon: string;
  summary: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinks {
  servicios: FooterLink[];
  empresa: FooterLink[];
  legal: FooterLink[];
}

export type GetContactFormConfig = (locale: Locale) => ContactFormConfig;
