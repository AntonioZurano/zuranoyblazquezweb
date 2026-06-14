import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCategories = [
  'Microsoft 365',
  'STEL Order',
  'Páginas web',
  'Websites',
  'Hosting y dominios',
  'Hosting and Domains',
  'Digitalización',
  'Digital Transformation',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['es', 'en']),
    translationKey: z.enum([
      'sme-digitalisation',
      'microsoft-365-plan',
      'stel-order-management',
    ]),
    category: z.enum(blogCategories),
    author: z.string().default('Zurano y Blazquez'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
