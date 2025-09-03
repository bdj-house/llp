'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Routes } from '@/config/routes';
import { Article } from '@/sanity/types/schema';
import { IconButton, If, ViewContainer } from '@/shared/components';
import { SummaryGrid } from '../components';

interface Props {
  articles: Article[];
}

const header = {
  title: 'Publicações',
  subtitle: 'Blog',
  subject: 'Acompanhe as últimas novidades e nossas visões sobre a àrea.',
};

export const ArticleSummaryScreen: React.FC<Props> = ({ articles }) => {
  const router = useRouter();

  return (
    <ViewContainer header={header} id="articles">
      <SummaryGrid articles={articles} />

      <If condition={articles.length >= 4}>
        <Box sx={{ position: 'absolute', right: '20px', bottom: '50%' }}>
          <Tooltip title={<Typography>Ver todos</Typography>} arrow>
            <IconButton action={() => router.push(Routes.Articles)} size="large">
              <ChevronRightIcon color="primary" sx={{ fontSize: 48 }} />
            </IconButton>
          </Tooltip>
        </Box>
      </If>
    </ViewContainer>
  );
};
