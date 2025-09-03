import type { Rule } from 'sanity';

const operationAreaSchema = {
  name: 'operationArea',
  title: 'Área de Atuação',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(100),
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Civil', value: 'CIVIL' },
          { title: 'Trabalho', value: 'TRABALHO' },
          { title: 'Previdenciário', value: 'PREVIDÊNCIA' },
          { title: 'Família', value: 'FAMÍLIA' },
          { title: 'Consumidor', value: 'CONSUMIDOR' },
          { title: 'Contratos', value: 'CONTRATOS' },
          { title: 'Criminal', value: 'CRIMINAL' },
          { title: 'Empresarial', value: 'EMPRESARIAL' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'content',
      title: 'Conteúdo Detalhado',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
      description: 'Número para ordenar as áreas (menor número aparece primeiro)',
      validation: (Rule: Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: 'Ordem de Exibição',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};

export default operationAreaSchema;
