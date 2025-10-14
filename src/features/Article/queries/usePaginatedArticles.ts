import { useInfiniteQuery } from '@tanstack/react-query';
import { sanityClient } from '@/sanity/lib/client';
import { paginatedArticlesQuery } from '@/sanity/queries';
import { Article } from '@/sanity/types/schema';

const PAGE_SIZE = 5;

interface Params {
  search?: string;
  tags?: string[];
  initialData?: Article[];
}

export const usePaginatedArticles = ({
  search = '',
  tags = [],
  initialData,
}: Params) => {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ['articles', { search, tags }],
    queryFn: async ({ pageParam = 0 }) => {
      const start = pageParam;
      const end = start + PAGE_SIZE;

      const data: Article[] = await sanityClient.fetch(paginatedArticlesQuery, {
        search,
        tags,
        start,
        end,
      });

      return {
        data,
        nextPage: data.length === PAGE_SIZE ? end : undefined,
      };
    },
    getNextPageParam: lastPage => lastPage.nextPage,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    initialData: initialData
      ? {
          pageParams: [0],
          pages: [{ data: initialData, nextPage: PAGE_SIZE }],
        }
      : undefined,
  });
};
