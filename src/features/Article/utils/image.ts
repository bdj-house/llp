import tempLogo from '@/assets/logo/temp-logo.png';
import { urlFor } from '@/sanity/lib/image';
import { Article } from '@/sanity/types/schema';

export const getArticleCoverImg = (article: Article, height: number, width?: number) => {
  if (!article.coverImage) {
    return tempLogo;
  }

  if (width) {
    return urlFor(article.coverImage.asset).width(width).height(height).auto('format').url();
  }

  return urlFor(article.coverImage.asset).height(height).auto('format').url();
};

export const hasArticleCoverImage = (article: Article): boolean => {
  return !!article.coverImage;
};
