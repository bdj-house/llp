import OurSpaceScreen from '@/features/OurSpace/screen';
import { sanityClient } from '@/sanity/lib/client';
import { ourSpacePageQuery } from '@/sanity/queries';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosso Espaço | Idalgo Cortijo',
  description:
    'Conheça nosso escritório: um ambiente acolhedor e preparado para atendê-lo com excelência e privacidade, em Piracicaba - SP.',
};

export default async function OurSpacePage() {
  const data = await sanityClient.fetch(ourSpacePageQuery);

  return (
    <OurSpaceScreen
      header={{
        title: data?.headerTitle,
        subtitle: data?.headerSubtitle,
        subject: data?.headerSubject,
      }}
      gallery={data?.gallery?.map((g: { url: string }) => g.url) ?? []}
      section={{
        title: data?.sectionTitle,
        paragraphs: data?.sectionParagraphs ?? [],
      }}
      address={data?.address}
      hours={data?.hours}
      contact={{ label: data?.contactButtonLabel, url: data?.contactButtonUrl }}
    />
  );
}
