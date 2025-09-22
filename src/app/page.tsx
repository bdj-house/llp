import { AboutScreen } from '@/features/About/screen';
import { ArticleSummaryScreen } from '@/features/Article/screen';
import { HomeScreen } from '@/features/Home/screen';
import { OperationItemsSection } from '@/features/OperationArea/screen';
import { sanityClient } from '@/sanity/lib/client';
import { allOperationAreasQuery, lastArticlesQuery } from '@/sanity/queries';
import { Article } from '@/sanity/types/schema';
import { mainPageMetadata } from '@/shared/constants';
import { Container } from '@mui/material';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return mainPageMetadata;
}

export default async function Page() {
  const [articles, operationAreas] = await Promise.all([
    sanityClient.fetch<Article[]>(lastArticlesQuery),
    sanityClient.fetch(allOperationAreasQuery),
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
      <HomeScreen />
      <AboutScreen />
      <OperationItemsSection operationAreas={operationAreas ?? []} />
      <ArticleSummaryScreen articles={articles ?? []} />
    </Container>
  );
}
