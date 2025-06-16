import { Metadata } from 'next';
import { ListArticlesScreen } from '@/features/Article/screen';
import { sanityClient } from '@/sanity/lib/client';
import { allTagsQuery, paginatedArticlesQuery } from '@/sanity/queries';
import { mainPageMetadata } from '@/shared/constants';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return mainPageMetadata;
}

export default async function Page() {
  const tags = await sanityClient.fetch<string[]>(allTagsQuery);
  const articles = await sanityClient.fetch(paginatedArticlesQuery, {
    search: '',
    tags: [],
    start: 0,
    end: 5,
  });
  const uniqueTags = Array.from(new Set(tags));

  return (
    <ListArticlesScreen tags={uniqueTags ?? []} initialArticles={articles} />
  );
}
