const aboutPageSchema = {
  name: 'aboutPage',
  title: 'Página Sobre',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string' },
    { name: 'subtitle', title: 'Subtítulo', type: 'string' },
    {
      name: 'profileImage',
      title: 'Imagem de Perfil',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'content',
      title: 'Conteúdo Principal',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default aboutPageSchema;
