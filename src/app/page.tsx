import { Metadata } from 'next';
import React from 'react';
import { AboutScreen } from '@/features/About/screen';
import { ArticleSummaryScreen } from '@/features/Article/screen';
import { ContactScreen } from '@/features/Contact/screen';
import { HomeScreen } from '@/features/Home/screen';
import { OperationAreaScreen } from '@/features/OperationArea/screen';
import { mainPageMetadata } from '@/shared/constants';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return mainPageMetadata;
}

export default async function Page() {
  // const about = await sanityClient.fetch<AboutPage[]>(aboutQuery);

  return (
    <React.Fragment>
      <HomeScreen />
      <OperationAreaScreen />
      <AboutScreen />
      <ArticleSummaryScreen />
      <ContactScreen />
    </React.Fragment>
  );
}
