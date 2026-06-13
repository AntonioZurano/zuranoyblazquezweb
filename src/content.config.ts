import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección del blog basada en archivos Markdown en src/content/blog.
// Usa el "glob loader" de Astro 6 (content layer).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'Microsoft 365',
      'STEL Order',
      'Páginas web',
      'Hosting y dominios',
      'Digitalización',
    ]),
    author: z.string().default('Zurano y Blazquez'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
