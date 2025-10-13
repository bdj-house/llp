import { useMemo } from 'react';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { Box, ButtonBase } from '@mui/material';
import { Article } from '@/sanity/types/schema';
import { ErrorBoundary, If, OpacityCard } from '@/shared/components';
import { useArticleNavigation, useLazyLoadArticles } from '../../hooks';
import { PreviewItem } from '../PreviewItem';
import { RedirectDialog } from '../RedirectDialog';
import { SkeletonPreview } from '../SkeletonPreview';
import {
  articleButtonStyles,
  getSkeletonWrapperStyles,
  GridContainer,
  InfiniteScrollObserver,
} from './styles';

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
  const { data, hasNextPage, isLoading, fetchNextPage, isFetching, isRefetching } = paginatedProps;

  const { ref } = useLazyLoadArticles({
    hasNextPage,
    isLoading,
    fetchNextPage,
  });

  const { navigateToArticle, redirectUrl, closeRedirectDialog } = useArticleNavigation();

  const articles = useMemo(() => {
    return data?.pages.flatMap(page => page.data) ?? [];
  }, [data]);

  const shouldShowSkeletons = isLoading || (isFetching && data?.pages.length === 1) || isRefetching;
  const shouldShowInfiniteSkeletons = isFetching && (data?.pages?.length ?? 0) > 1;

  return (
    <ErrorBoundary>
      <GridContainer className={isFetching ? 'loading' : ''}>
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
              <ButtonBase onClick={() => navigateToArticle(article)} sx={articleButtonStyles}>
                <PreviewItem article={article} isHighlight={i === 0} index={i} />
              </ButtonBase>
            </OpacityCard>
          ))}

        {shouldShowSkeletons &&
          Array.from({ length: 6 }).map((_, i) => (
            <Box key={`skeleton-${i}`} sx={getSkeletonWrapperStyles(i === 0)}>
              <SkeletonPreview isHighlight={i === 0} />
            </Box>
          ))}
      </GridContainer>

      <If condition={articles.length > 0}>
        <InfiniteScrollObserver ref={ref}>
          <If condition={shouldShowInfiniteSkeletons}>
            {Array.from({ length: 2 }).map((_, i) => (
              <Box key={`scroll-skeleton-${i}`} sx={getSkeletonWrapperStyles()}>
                <SkeletonPreview />
              </Box>
            ))}
          </If>
        </InfiniteScrollObserver>
      </If>

      <RedirectDialog open={!!redirectUrl} onClose={closeRedirectDialog} url={redirectUrl ?? ''} />
    </ErrorBoundary>
  );
};
