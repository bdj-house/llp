'use client';

import { Grid, useTheme } from '@mui/material';
import { Article } from '@/sanity/types/schema';
import { ViewContainer } from '@/shared/components';
import { ArticleCard } from '../components';

interface Props {
  articles: Article[];
}

export const ArticleSummaryScreen: React.FC<Props> = ({ articles }) => {
  const theme = useTheme();

  return (
    <ViewContainer bgcolor={theme.palette.background.default}>
      <Grid container height="100%" p={4}>
        {articles.map(article => (
          <ArticleCard
            key={article._id}
            article={article}
          />
        ))}
      </Grid>
    </ViewContainer>
  );
};
