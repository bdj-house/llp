import { ArticleDetails } from '@/features/Article/screen';
import { sanityClient } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { articleByIdQuery, siteSettingsQuery } from '@/sanity/queries';
import { Article, SiteSettings } from '@/sanity/types/schema';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const [settings, article] = await Promise.all([
    sanityClient.fetch<SiteSettings>(siteSettingsQuery),
    sanityClient.fetch<Article>(articleByIdQuery, { id }),
  ]);

  const getCoverImage = () => {
    if (article?.coverImage) {
      return urlFor(article.coverImage.asset).url();
    }

    if (settings?.seo?.openGraphImage) {
      return urlFor(settings.seo.openGraphImage.asset).url();
    }

    return undefined;
  };

  const baseTitle = settings?.seo?.title || 'Idalgo Cortijo';
  const title = article?.title ? `${article.title} | ${baseTitle}` : baseTitle;
  const description = article?.excerpt || settings?.seo?.description || '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: getCoverImage(),
    },
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const article = await sanityClient.fetch<Article>(articleByIdQuery, { id });

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticleDetails article={article} />;
}
