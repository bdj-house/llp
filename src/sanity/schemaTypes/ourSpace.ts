import type { Rule } from 'sanity';

const ourSpaceSchema = {
  name: 'ourSpacePage',
  title: 'Nosso Espaço',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    {
      name: 'headerTitle',
      title: 'Título',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'headerSubtitle',
      title: 'Subtítulo',
      type: 'string',
    },
    {
      name: 'headerSubject',
      title: 'Descrição do topo',
      type: 'text',
      rows: 3,
    },
    {
      name: 'gallery',
      title: 'Galeria',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: Rule) => Rule.min(1),
    },
    {
      name: 'sectionTitle',
      title: 'Título da seção',
      type: 'string',
    },
    {
      name: 'sectionParagraphs',
      title: 'Parágrafos',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'address',
      title: 'Endereço',
      type: 'string',
    },
    {
      name: 'hours',
      title: 'Horário de atendimento',
      type: 'string',
    },
    {
      name: 'contactButtonLabel',
      title: 'Rótulo botão contato',
      type: 'string',
    },
    {
      name: 'contactButtonUrl',
      title: 'URL botão contato',
      type: 'url',
    },
  ],
};

export default ourSpaceSchema;
