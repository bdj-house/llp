import OurSpaceScreen from '@/features/OurSpace/screen';
import { sanityClient } from '@/sanity/lib/client';
import { ourSpacePageQuery, siteSettingsQuery } from '@/sanity/queries';
import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Nosso Espaço | Idalgo Cortijo',
  description:
    'Conheça nosso escritório: um ambiente acolhedor e preparado para atendê-lo com excelência e privacidade, em Piracicaba - SP.',
};

export const revalidate = 600;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityClient.fetch(siteSettingsQuery);
  const title = settings?.seo?.title
    ? `${settings.seo.title} | Nosso Espaço`
    : 'Nosso Espaço | Idalgo Cortijo';
  const description = settings?.seo?.description || metadata.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: settings?.seo?.openGraphImage ? [{ url: settings.seo.openGraphImage }] : undefined,
    },
  };
}

type SanityOurSpacePage = {
  gallery: { url: string }[];
  headerTitle: string;
  headerSubtitle: string;
  headerSubject: string;
  sectionTitle: string;
  sectionParagraphs: string[];
  address: string;
  hours: string;
  contactButtonLabel: string;
  contactButtonUrl: string;
};

export default async function OurSpacePage() {
  const data = await sanityClient.fetch<SanityOurSpacePage>(ourSpacePageQuery);

  const gallery = data?.gallery?.map(s => s.url) ?? [];

  return (
    <OurSpaceScreen
      header={{
        title: data?.headerTitle,
        subtitle: data?.headerSubtitle,
        subject: data?.headerSubject,
      }}
      gallery={gallery}
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
