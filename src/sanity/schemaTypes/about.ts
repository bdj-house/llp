const aboutPageSchema = {
  name: 'aboutPage',
  title: 'Sobre',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    { name: 'title', title: 'Título', type: 'string' },
    { name: 'subtitle', title: 'Subtítulo', type: 'string' },
    {
      name: 'description',
      title: 'Descrição',
      type: 'string',
    },
    {
      name: 'associates',
      title: 'Associadas',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'associate' }] }],
    },
  ],
};

export default aboutPageSchema;
