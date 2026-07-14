export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'labeled'; label: string; text: string }
  | { type: 'p-email'; before: string; after?: string }
  | { type: 'p-link'; before: string; linkText: string; href: string; after?: string; external?: boolean }
  | { type: 'address'; lines: string[]; email?: boolean }
  | { type: 'table'; headers: string[]; rows: string[][] };

/** @deprecated Use LegalBlock */
export type PrivacyBlock = LegalBlock;

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

/** @deprecated Use LegalSection */
export type PrivacySection = LegalSection;
