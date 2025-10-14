import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Routes } from '@/config/routes';
import { Article } from '@/sanity/types/schema';

export const useArticleNavigation = () => {
  const router = useRouter();
  const [redirectUrl, setRedirectUrl] = useState<string>();

  const navigateToArticle = useCallback(
    (article: Article) => {
      if (article.sourceLink) {
        setRedirectUrl(article.sourceLink);
        return;
      }

      router.push(`${Routes.Articles}/${article._id}`);
    },
    [router],
  );

  const closeRedirectDialog = useCallback(() => {
    setRedirectUrl(undefined);
  }, []);

  return {
    navigateToArticle,
    redirectUrl,
    closeRedirectDialog,
  };
};
