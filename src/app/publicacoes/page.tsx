import { Metadata } from 'next';
import { ListArticlesScreen } from '@/features/Article/screen';
import { sanityClient } from '@/sanity/lib/client';
import { allTagsQuery, paginatedArticlesQuery, siteSettingsQuery } from '@/sanity/queries';
import type { Article, SanityImageAsset, SiteSettings } from '@/sanity/types/schema';

export const dynamic = 'force-static';
export const revalidate = 600;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
  const title = settings?.seo?.title;
  ('Publicações | Idalgo Cortijo');
  const description =
    settings?.seo?.description || 'Acompanhe nossas publicações e artigos especializados.';
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: settings?.seo?.openGraphImage
        ? [{ url: (settings.seo.openGraphImage.asset as unknown as SanityImageAsset).url }]
        : undefined,
    },
  };
}

export default async function Page() {
  const tags = await sanityClient.fetch<string[]>(allTagsQuery);
  const articles = await sanityClient.fetch<Article[]>(paginatedArticlesQuery, {
    search: '',
    tags: [],
    start: 0,
    end: 5,
  });
  const uniqueTags = Array.from(new Set(tags));

  return <ListArticlesScreen tags={uniqueTags ?? []} initialArticles={articles} />;
}
