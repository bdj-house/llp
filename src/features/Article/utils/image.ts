import tempLogo from '@/assets/logo/temp-logo.png';
import { Article, SanityImageAsset } from '@/sanity/types/schema';

export const getArticleCoverImg = (article: Article) => {
  return (article.coverImage?.asset as unknown as SanityImageAsset)?.url ?? tempLogo;
};
