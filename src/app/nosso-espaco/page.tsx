import OurSpaceScreen from '@/features/OurSpace/screen';
import { sanityClient } from '@/sanity/lib/client';
import { ourSpacePageQuery, siteSettingsQuery } from '@/sanity/queries';
import type {
  SanityImageAsset,
  OurSpacePage as SanityOurSpacePage,
  SanityReference,
} from '@/sanity/types/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
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

export default async function OurSpacePage() {
  const data = await sanityClient.fetch<SanityOurSpacePage>(ourSpacePageQuery);

  return (
    <OurSpaceScreen
      header={{
        title: data?.headerTitle,
        subtitle: data?.headerSubtitle,
        subject: data?.headerSubject,
      }}
      gallery={
        data?.gallery?.map(
          (g: { _type: 'image'; asset: SanityReference<SanityImageAsset> }) =>
            (g.asset as unknown as SanityImageAsset).url,
        ) ?? []
      }
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
