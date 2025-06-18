'use client';

import { Box } from '@mui/material';
import { Article } from '@/sanity/types/schema';
import { ArticleCard } from '../Card';

interface Props {
  articles: Article[];
}

export const SummaryGrid: React.FC<Props> = ({ articles }) => {
  const hasEnoughArticles = articles.length >= 4;

  if (!hasEnoughArticles) {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        gap={4}
        px={16}
        pb={24}
        justifyContent="center"
      >
        {articles.map((article, index) => (
          <ArticleCard
            key={article._id}
            article={article}
            isVertical
            index={index}
          />
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
        sm: 'repeat(3, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gridTemplateAreas={{
        xs: `"a" "b" "c" "d"`,
        sm: `
          "a b d"
          "a b d"
          "a c d"
          "a c d"
        `,
      }}
      gap={6}
      py={6}
      px={18}
      pb={24}
    >
      {gridItems.map(({ gridArea, article, isVertical, isDark, mt }, i) => (
        <Box
          key={article._id}
          sx={{
            gridArea,
            mt,
            display: 'flex',
            justifyContent: gridArea === 'a' ? 'flex-end' : 'flex-start',
          }}
        >
          <ArticleCard
            article={article}
            isVertical={isVertical}
            isDark={isDark}
            index={i}
          />
        </Box>
      ))}
    </Box>
  );
};
