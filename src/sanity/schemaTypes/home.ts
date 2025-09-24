import type { Rule } from 'sanity';

const homePageSchema = {
  name: 'homePage',
  title: 'Página Inicial',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    {
      name: 'heroLogo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroTitle',
      title: 'Título',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(120),
    },
    {
      name: 'heroSubtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 3,
    },
    {
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};

export default homePageSchema;
