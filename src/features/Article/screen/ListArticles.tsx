'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { Article } from '@/sanity/types/schema';
import { GridList, RedirectDialog, SidebarFilter } from '../components';
import { usePaginatedArticles } from '../queries';

interface Props {
  tags: string[];
  initialArticles: Article[];
}

export const ListArticlesScreen: React.FC<Props> = ({
  tags,
  initialArticles,
}) => {
  const theme = useTheme();

  const [urlRedirect, setUrlRedirect] = useState<string>();
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const paginatedProps = usePaginatedArticles({
    search,
    tags: selectedTags,
    initialData: initialArticles,
  });

  const handleToggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag],
    );
  };

  const resetFilters = () => {
    setSearch('');
    setSelectedTags([]);
  };

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
        position: 'relative',
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h1" color="secondary" fontWeight="bold">
          Publicações
        </Typography>
        <Typography variant="h5" color="primary" mt={4}>
          Conheça todas as nossas publicações e referências sobre nossas visões
          gerais
        </Typography>
      </Box>

      <GridList paginatedProps={paginatedProps} />

      <SidebarFilter
        tags={tags}
        selectedTags={selectedTags}
        onToggleTag={handleToggleTag}
        onClear={resetFilters}
        search={search}
        setSearch={setSearch}
      />

      <RedirectDialog
        open={!!urlRedirect}
        onClose={() => setUrlRedirect(undefined)}
        url={urlRedirect ?? ''}
      />
    </Container>
  );
};
