import type { Rule, ValidationContext } from 'sanity';

const articlePage = {
  name: 'article',
  title: 'Artigos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(80),
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: (Rule: Rule) => {
        const date = new Date();

        date.setDate(date.getDate() + 1);

        return Rule.required()
          .max(date.toISOString())
          .error('A data não pode estar no futuro.');
      },
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      validation: (Rule: Rule) => Rule.max(480),
    },
    {
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) =>
        Rule.custom((content: unknown, context: ValidationContext) => {
          const document = context.document as Record<string, unknown>;
          const sourceLink = document?.sourceLink;

          const hasLink =
            typeof sourceLink === 'string' && sourceLink.trim() !== '';

          if (hasLink) {
            return 'Você não pode preencher o conteúdo e fornecer o link do artigo ao mesmo tempo.';
          }

          const hasContent = Array.isArray(content) && content.length > 0;

          if (!hasContent && !hasLink) {
            return 'Você deve preencher o conteúdo ou fornecer o link do artigo.';
          }

          return true;
        }),
    },
    {
      name: 'sourceLink',
      title: 'Link do Artigo',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.uri({ allowRelative: false }).custom(
          (link: unknown, context: ValidationContext) => {
            const document = context.document as Record<string, unknown>;
            const content = document?.content;

            const hasContent = Array.isArray(content) && content.length > 0;

            if (hasContent) {
              return `Você não pode preencher o conteúdo e fornecer 
              o link do artigo ao mesmo tempo.`;
            }

            const hasLink = typeof link === 'string' && link.trim() !== '';

            if (!hasLink && !hasContent) {
              return 'Você deve preencher o conteúdo ou fornecer o link do artigo.';
            }

            return true;
          },
        ),
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(80),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule: Rule) =>
            Rule.max(20).error('Cada tag deve ter no máximo 20 caracteres.'),
        },
      ],
    },
  ],
};

export default articlePage;
