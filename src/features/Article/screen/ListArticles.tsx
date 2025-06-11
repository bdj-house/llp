'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import { Article } from '@/sanity/types/schema';
import { PreviewItem } from '../components';

interface Props {
  articles: Article[];
}

export const ListArticlesScreen: React.FC<Props> = ({ articles }) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: theme.palette.background.paper,
        py: 12,
        minHeight: '100vh',
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h1" color="secondary" fontWeight="bold">Publicações</Typography>
        <Typography variant="h5" color="textSecondary" mt={4}>
          Conheça todas as nossas publicações e referências sobre nossas visões gerais
        </Typography>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(240px, 1fr))"
        gap={4}
        sx={{ px: '10%', mt: 4 }}
      >
        {articles.map((article, i) => (
          <Box
            key={article._id}
            gridColumn={i === 0 ? 'span 2' : 'span 1'}
            gridRow={i === 0 ? 'span 2' : 'span 1'}
          >
            <PreviewItem article={article} isHighlight={i === 0} />
          </Box>
        ))}
      </Box>

    </Container>
  );
};
