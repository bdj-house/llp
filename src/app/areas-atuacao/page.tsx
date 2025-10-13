import { Metadata } from 'next';
import { OperationAreaScreen } from '@/features/OperationArea/screen';
import { sanityClient } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { allOperationAreasQuery, siteSettingsQuery } from '@/sanity/queries';
import type { OperationArea, SiteSettings } from '@/sanity/types/schema';

export const revalidate = 600;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
  const title = settings?.seo?.title
    ? `${settings.seo.title} | Áreas de Atuação`
    : 'Áreas de Atuação - Idalgo & Cortijo';
  const description =
    settings?.seo?.description ||
    'Conheça as áreas de atuação e especializações da Idalgo & Cortijo em direito civil, trabalhista, previdenciário e mais.';
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: settings?.seo?.openGraphImage
        ? [{ url: urlFor(settings.seo.openGraphImage.asset).url() }]
        : undefined,
    },
  };
}

export default async function AreasAtuacaoPage() {
  const operationAreas = await sanityClient.fetch<OperationArea[]>(allOperationAreasQuery);

  return <OperationAreaScreen operationAreas={operationAreas ?? []} />;
}
