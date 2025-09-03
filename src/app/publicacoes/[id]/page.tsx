import { Metadata } from 'next';
import { ArticleDetails } from '@/features/Article/screen';
import { sanityClient } from '@/sanity/lib/client';
import { articleByIdQuery } from '@/sanity/queries';
import { Article } from '@/sanity/types/schema';
import { mainPageMetadata } from '@/shared/constants';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return mainPageMetadata;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const article = await sanityClient.fetch<Article>(articleByIdQuery, { id });

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticleDetails article={article} />;
}
