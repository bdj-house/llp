import { Metadata } from 'next';
import React from 'react';
import { AboutScreen } from '@/features/About/screen';
import { ArticleSummaryScreen } from '@/features/Article/screen';
import { ContactScreen } from '@/features/Contact/screen';
import { HomeScreen } from '@/features/Home/screen';
import { OperationAreaScreen } from '@/features/OperationArea/screen';
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

  return (
    <React.Fragment>
      <HomeScreen />
      <AboutScreen />
      <OperationAreaScreen />
      <ArticleSummaryScreen articles={articles ?? []} />
      <ContactScreen />
    </React.Fragment>
  );
}
