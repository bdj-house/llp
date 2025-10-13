'use client';

import { useState } from 'react';
import { Article } from '@/sanity/types/schema';
import { ViewContainer } from '@/shared/components';
import { GridList, RedirectDialog, SidebarFilter } from '../../components';
import { usePaginatedArticles } from '../../queries';

interface Props {
  tags: string[];
  initialArticles: Article[];
}

export const ListArticlesScreen: React.FC<Props> = ({ tags, initialArticles }) => {
  const [urlRedirect, setUrlRedirect] = useState<string>();
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const paginatedProps = usePaginatedArticles({
    search,
    tags: selectedTags,
    initialData: initialArticles,
  });

  const handleToggleTag = (tag: string) => {
    setSelectedTags(prev => (prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]));
  };

  const resetFilters = () => {
    setSearch('');
    setSelectedTags([]);
  };

  return (
    <ViewContainer
      isPageContainer
      header={{
        title: 'Publicações',
        subtitle: 'Conheça nossas idéias sobre as novidades do mundo jurídico',
        subject: 'Fique por dentro de todos os assuntos legais que podem impactar sua vida',
      }}
    >
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
    </ViewContainer>
  );
};
