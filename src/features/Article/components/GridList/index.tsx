import { Routes } from '@/config/routes';
import { Article } from '@/sanity/types/schema';
import { ErrorBoundary, If, OpacityCard } from '@/shared/components';
import { Box, ButtonBase } from '@mui/material';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { useLazyLoadArticles } from '../../hooks';
import { PreviewItem } from '../PreviewItem';
import { RedirectDialog } from '../RedirectDialog';
import { SkeletonPreview } from '../SkeletonPreview';

interface Props {
  paginatedProps: UseInfiniteQueryResult<
    InfiniteData<
      {
        data: Article[];
        nextPage: number | undefined;
      },
      unknown
    >,
    Error
  >;
}

export const GridList: React.FC<Props> = ({ paginatedProps }) => {
  const router = useRouter();

  const { data, hasNextPage, isLoading, fetchNextPage, isFetching, isRefetching } = paginatedProps;

  const { ref } = useLazyLoadArticles({
    hasNextPage,
    isLoading,
    fetchNextPage,
  });

  const [urlRedirect, setUrlRedirect] = useState<string>();

  const articles = useMemo(() => {
    return data?.pages.flatMap(page => page.data) ?? [];
  }, [data]);

  const goToDetails = useCallback(
    (item: Article) => {
      if (item.sourceLink) {
        setUrlRedirect(item.sourceLink ?? '');
        return;
      }

      router.push(`${Routes.Articles}/${item._id}`);
    },
    [router],
  );

  const shouldShowSkeletons = isLoading || (isFetching && data?.pages.length === 1) || isRefetching;
  const shouldShowInfiniteSkeletons = isFetching && (data?.pages?.length ?? 0) > 1;

  return (
    <ErrorBoundary>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(220px, 1fr))"
        gap={4}
        sx={{
          px: { xs: 3, md: 12, lg: 36 },
          opacity: isFetching ? 0.4 : 1,
          transition: 'opacity 0.4s ease-in-out',
        }}
      >
        {!isRefetching &&
          articles.map((article, i) => (
            <OpacityCard
              key={article._id}
              index={i}
              sx={{
                gridColumn: { xs: 'span 1', md: i === 0 ? 'span 2' : 'span 1' },
                gridRow: { xs: 'span 1', md: i === 0 ? 'span 2' : 'span 1' },
              }}
            >
              <ButtonBase onClick={() => goToDetails(article)} sx={{ width: '100%' }}>
                <PreviewItem article={article} isHighlight={i === 0} index={i} />
              </ButtonBase>
            </OpacityCard>
          ))}

        {shouldShowSkeletons &&
          [...Array.from({ length: 6 })].map((_, i) => (
            <Box
              key={`skeleton-${Math.random()}`}
              gridColumn={i === 0 ? 'span 2' : 'span 1'}
              gridRow={i === 0 ? 'span 2' : 'span 1'}
            >
              <SkeletonPreview isHighlight={i === 0} />
            </Box>
          ))}
      </Box>

      <If condition={articles.length > 0}>
        <Box
          ref={ref}
          sx={{
            width: '100%',
            height: 60,
            gridColumn: '1 / -1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <If condition={shouldShowInfiniteSkeletons}>
            {[...Array.from({ length: 2 })].map(() => (
              <Box key={`scroll-skeleton-${Math.random()}`} gridColumn="span 1" gridRow="span 1">
                <SkeletonPreview />
              </Box>
            ))}
          </If>
        </Box>
      </If>

      <RedirectDialog
        open={!!urlRedirect}
        onClose={() => setUrlRedirect(undefined)}
        url={urlRedirect ?? ''}
      />
    </ErrorBoundary>
  );
};
