import { Container } from '@mui/material';
import { Metadata } from 'next';
import { AboutScreen } from '@/features/About/screen';
import { ArticleSummaryScreen } from '@/features/Article/screen';
import { HomeScreen } from '@/features/Home/screen';
import { OperationAreaScreen } from '@/features/OperationArea/screen';
import { sanityClient } from '@/sanity/lib/client';
import { lastArticlesQuery } from '@/sanity/queries';
import { Article } from '@/sanity/types/schema';
import { mainPageMetadata } from '@/shared/constants';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return mainPageMetadata;
}

export default async function Page() {
  const articles = await sanityClient.fetch<Article[]>(lastArticlesQuery);

  return (
    <Container
      maxWidth={false}
      sx={{ px: 0, py: 0, backgroundColor: 'background.paper' }}
      disableGutters
    >
      <HomeScreen />
      <AboutScreen />
      <OperationAreaScreen />
      <ArticleSummaryScreen articles={articles ?? []} />
    </Container>
  );
}
