import { Metadata } from 'next';
import { ListArticlesScreen } from '@/features/Article/screen';
import { sanityClient } from '@/sanity/lib/client';
import { allArticlesQuery } from '@/sanity/queries';
import { Article } from '@/sanity/types/schema';
import { mainPageMetadata } from '@/shared/constants';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return mainPageMetadata;
}

export default async function Page() {
  const articles = await sanityClient.fetch<Article[]>(allArticlesQuery);

  return <ListArticlesScreen articles={articles ?? []} />;
}
