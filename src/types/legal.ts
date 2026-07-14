export type PrivacyBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'p-email'; before: string; after?: string }
  | { type: 'p-link'; before: string; linkText: string; href: string; after?: string; external?: boolean }
  | { type: 'address'; lines: string[]; email?: boolean };

export interface PrivacySection {
  title: string;
  blocks: PrivacyBlock[];
}
