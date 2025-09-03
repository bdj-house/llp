import { Article } from '@/sanity/types/schema';

export const getArticleDate = (article: Article, long?: boolean) => {
  if (!article?.publishedAt) {
    return '';
  }

  return new Date(article.publishedAt).toLocaleDateString('pt-BR', {
    dateStyle: long ? 'long' : 'short',
  });
};
