export interface SelectOption {
  value: string;
  label: string;
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
  /** Texto antes del enlace mailto (solo ES). */
  formNote?: string;
  /** Nota legal breve bajo el botón (EN y fallback). */
  legalNote: string;
  services: SelectOption[];
}
