'use client';

import { Container, LinearProgress, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { Routes } from '@/config/routes';
import { Article } from '@/sanity/types/schema';
import { Breadcrumb } from '@/shared/components';
import { useHeader } from '@/shared/hooks';
import {
  DetailsContent,
  DetailsHeader,
  SocialShareSticky,
} from '../components';
import { useProgressBar } from '../hooks';

interface ArticleDetailsProps {
  article: Article;
}

const Details = ({ article }: ArticleDetailsProps) => {
  const theme = useTheme();
  const { scrollProgress } = useProgressBar();

  return (
    <Container
      sx={{ bgcolor: theme.palette.background.paper, py: 6 }}
      maxWidth={false}
    >
      <LinearProgress
        variant="determinate"
        value={scrollProgress}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
        }}
      />

      <SocialShareSticky title={article.title} />

      <Breadcrumb
        title={article.title ?? ''}
        lastPage={{ label: 'Publicações', route: Routes.Articles }}
      />

      <DetailsHeader article={article} />

      <DetailsContent article={article} />
    </Container>
  );
};

export const ArticleDetails = ({ article }: { article: Article }) => {
  const { setMode } = useHeader();

  useEffect(() => {
    setMode('static');
    return () => setMode('dynamic');
  }, [setMode]);

  return <Details article={article} />;
};
