import type { Rule } from 'sanity';

const associateSchema = {
  name: 'associate',
  title: 'Associadas',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(100),
    },
    {
      name: 'role',
      title: 'Cargo',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(100),
    },
    {
      name: 'description',
      title: 'Descrição breve',
      type: 'text',
      rows: 3,
      validation: (Rule: Rule) => Rule.max(300),
    },
    {
      name: 'graduation',
      title: 'Formação',
      type: 'string',
    },
    {
      name: 'history',
      title: 'História',
      type: 'text',
      rows: 12,
    },
    {
      name: 'imageCover',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'imageProfile',
      title: 'Imagem de Perfil (modal)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'email',
      title: 'E-mail',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp URL',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Ordem',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0),
    },
    {
      name: 'active',
      title: 'Ativa',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'imageCover',
    },
  },
  orderings: [
    {
      title: 'Ordem',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};

export default associateSchema;
