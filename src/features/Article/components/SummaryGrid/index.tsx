'use client';

import { Article } from '@/sanity/types/schema';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ArticleCard } from '../Card';

interface Props {
  articles: Article[];
}

export const SummaryGrid: React.FC<Props> = ({ articles }) => {
  const theme = useTheme();

  const hasEnoughArticles = articles.length >= 4;

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!hasEnoughArticles) {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        gap={{ xs: 3, md: 4 }}
        px={{ xs: 2, md: 16 }}
        pb={{ xs: 12, md: 24 }}
        justifyContent="center"
      >
        {articles.map((article, index) => (
          <ArticleCard key={article._id} article={article} isVertical index={index} />
        ))}
      </Box>
    );
  }

  const displayedArticles = articles.slice(0, 4);

  const gridItems = [
    {
      gridArea: 'a',
      article: displayedArticles[0],
      isVertical: true,
      isDark: false,
      mt: -3,
    },
    {
      gridArea: 'b',
      article: displayedArticles[1],
      isVertical: false,
      isDark: false,
    },
    {
      gridArea: 'c',
      article: displayedArticles[2],
      isVertical: false,
      isDark: true,
    },
    {
      gridArea: 'd',
      article: displayedArticles[3],
      isVertical: true,
      isDark: true,
      mt: 10,
    },
  ];

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gridTemplateAreas={{
        xs: `"a" "b" "c" "d"`,
        sm: `"a b" "c d"`,
        md: `
          "a b d"
          "a b d"
          "a c d"
          "a c d"
        `,
      }}
      gap={{ xs: 3, md: 6 }}
      py={{ xs: 3, md: 6 }}
      px={{ xs: 2, md: 18 }}
      pb={{ xs: 12, md: 24 }}
    >
      {gridItems.map(({ gridArea, article, isVertical, isDark, mt }, i) => (
        <Box
          key={article._id}
          sx={{
            gridArea,
            mt: isMobile ? 0 : mt,
            display: 'flex',
            justifyContent: gridArea === 'a' ? 'flex-end' : 'flex-start',
          }}
        >
          <ArticleCard
            article={article}
            isVertical={isMobile ? true : isVertical}
            isDark={isDark}
            index={i}
          />
        </Box>
      ))}
    </Box>
  );
};
