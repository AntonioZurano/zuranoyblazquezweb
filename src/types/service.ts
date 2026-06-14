import type { ServiceItem } from './site';

export interface ServiceFeature {
  icon: string;
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  introTitle: string;
  introText: string;
  benefits: string[];
  features: ServiceFeature[];
  faq: FaqItem[];
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface ValueBlock {
  icon: string;
  title: string;
  text: string;
}

export interface StepBlock {
  num: string;
  title: string;
  text: string;
}

export interface StatBlock {
  num: string;
  label: string;
}

export interface HomePageContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesDescription: string;
  trustEyebrow: string;
  trustTitle: string;
  trustDescription: string;
  values: ValueBlock[];
  stepsEyebrow: string;
  stepsTitle: string;
  stepsDescription: string;
  steps: StepBlock[];
  blogEyebrow: string;
  blogTitle: string;
  blogDescription: string;
  blogMore: string;
  blogNote: string;
}

export interface CompanyPageContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  whoEyebrow: string;
  whoTitle: string;
  lead: string;
  body: string;
  missionTitle: string;
  mission: string;
  visionTitle: string;
  vision: string;
  valuesTitle: string;
  values: ValueBlock[];
  stats: StatBlock[];
  ctaTitle: string;
  ctaText: string;
}

export interface ServicesPageContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCta: CtaLink;
  catalogEyebrow: string;
  catalogTitle: string;
  catalogDescription: string;
}

export interface BlogPageContent {
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

export type EnServiceItem = ServiceItem;
