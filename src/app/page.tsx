import { HomeScreen } from '@/features/Home/screen';
import { sanityClient } from '@/sanity/lib/client';
import {
  aboutQuery,
  allOperationAreasQuery,
  homePageQuery,
  lastArticlesQuery,
} from '@/sanity/queries';
import { Article } from '@/sanity/types/schema';
import { mainPageMetadata } from '@/shared/constants';
import { Container } from '@mui/material';
import { Metadata } from 'next';
import nextDynamic from 'next/dynamic';

export const dynamic = 'force-static';
export const revalidate = 300; // ISR every 5 minutes

export async function generateMetadata(): Promise<Metadata> {
  return mainPageMetadata;
}

export default async function Page() {
  const [articles, operationAreas, aboutData, homeData] = await Promise.all([
    sanityClient.fetch<Article[]>(lastArticlesQuery),
    sanityClient.fetch(allOperationAreasQuery),
    sanityClient.fetch(aboutQuery),
    sanityClient.fetch(homePageQuery),
  ]);

  return (
    <Container
      maxWidth={false}
      sx={{
        px: 0,
        py: 0,
        backgroundColor: 'background.paper',
        gap: 12,
        display: 'flex',
        flexDirection: 'column',
      }}
      disableGutters
    >
      <HomeScreen
        heroLogoUrl={homeData?.heroLogo}
        heroTitle={homeData?.heroTitle}
        heroSubtitle={homeData?.heroSubtitle}
        mainImageUrl={homeData?.mainImage}
      />
      <About
        associates={aboutData?.associates ?? []}
        sectionInfo={{
          title: aboutData?.title ?? '',
          subtitle: aboutData?.subtitle ?? '',
          subject: aboutData?.description ?? '',
        }}
      />
      <OperationItems operationAreas={operationAreas ?? []} />
      <ArticleSummary articles={articles ?? []} />
    </Container>
  );
}

// Dynamic imports (SSR enabled for SEO, but JS is code-split)
const About = nextDynamic(() => import('@/features/About/screen').then(m => m.AboutScreen), {
  ssr: true,
  loading: () => null,
});

const OperationItems = nextDynamic(
  () => import('@/features/OperationArea/screen').then(m => m.OperationItemsSection),
  {
    ssr: true,
    loading: () => null,
  },
);

const ArticleSummary = nextDynamic(
  () => import('@/features/Article/screen').then(m => m.ArticleSummaryScreen),
  {
    ssr: true,
    loading: () => null,
  },
);
