'use client';

import { Box, ButtonBase, Container, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Routes } from '@/config/routes';
import { Article } from '@/sanity/types/schema';
import { PreviewItem, RedirectDialog } from '../components';

interface Props {
  articles: Article[];
}

export const ListArticlesScreen: React.FC<Props> = ({ articles }) => {
  const theme = useTheme();
  const router = useRouter();

  const [urlRedirect, setUrlRedirect] = useState<string>();

  const closeRedirect = () => {
    setUrlRedirect(undefined);
  };

  const confirmRedirect = () => {
    window.open(urlRedirect, '_blank');
    closeRedirect();
  };

  const goToDetails = (item: Article) => {
    if (!item.content) {
      setUrlRedirect(item.sourceLink ?? '');
      return;
    }

    router.push(`${Routes.Articles}/${item._id}`);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: theme.palette.background.paper,
        py: 10,
        minHeight: '100vh',
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h1" color="secondary" fontWeight="bold">Publicações</Typography>
        <Typography variant="h5" color="primary" mt={4}>
          Conheça todas as nossas publicações e referências sobre nossas visões gerais
        </Typography>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(220px, 1fr))"
        gap={4}
        sx={{ px: '300px', mt: 2 }}
      >
        {articles.map((article, i) => (
          <Box
            key={article._id}
            gridColumn={i === 0 ? 'span 2' : 'span 1'}
            gridRow={i === 0 ? 'span 2' : 'span 1'}
          >
            <ButtonBase onClick={() => goToDetails(article)} sx={{ width: '100%' }}>
              <PreviewItem article={article} isHighlight={i === 0} />
            </ButtonBase>

          </Box>

        ))}
      </Box>

      <RedirectDialog
        open={!!urlRedirect}
        onClose={closeRedirect}
        onConfirm={confirmRedirect}
      />
    </Container>
  );
};
