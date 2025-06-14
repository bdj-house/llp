import tempLogo from '@/assets/logo/temp-logo.png';
import { urlFor } from '@/sanity/lib/image';
import { Article } from '@/sanity/types/schema';

export const getArticleCoverImg = (article: Article, height: number) => {
  if (!article.coverImage) {
    return tempLogo;
  }

  return urlFor(article.coverImage.asset).height(height).auto('format').url();
};
