'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ButtonBase, Tooltip, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Routes } from '@/config/routes';
import { Article } from '@/sanity/types/schema';
import { If, ViewContainer } from '@/shared/components';
import { SummaryGrid, SummaryHeader } from '../components';

interface Props {
  articles: Article[];
}

export const ArticleSummaryScreen: React.FC<Props> = ({ articles }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ViewContainer secondaryBg>
      <SummaryHeader />

      <SummaryGrid articles={articles} />

      <If condition={articles.length >= 4}>
        <Tooltip title={<Typography>Ver todos</Typography>} arrow>
          <ButtonBase
            onClick={() => router.push(Routes.Articles)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'absolute',
              gap: 1,
              right: '20px',
              bottom: '50%',
              border: `1px solid ${theme.palette.primary.dark}`,
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: `0 0 12px ${theme.palette.primary.main}`,
                transform: 'scale(1.05)',
                borderColor: theme.palette.primary.main,
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <ChevronRightIcon color="primary" sx={{ fontSize: 48 }} />
          </ButtonBase>
        </Tooltip>
      </If>
    </ViewContainer>
  );
};
