import { OperationAreaScreen } from '@/features/OperationArea/screen';
import { sanityClient } from '@/sanity/lib/client';
import { allOperationAreasQuery, operationAreaByIdQuery } from '@/sanity/queries';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const operationArea = await sanityClient.fetch(operationAreaByIdQuery, { id: params.id });

  if (!operationArea) {
    return {
      title: 'Área de Atuação - Idalgo & Cortijo',
    };
  }

  return {
    title: `${operationArea.title} - Idalgo & Cortijo`,
    description:
      operationArea.description || `Conheça mais sobre ${operationArea.title} na Idalgo & Cortijo.`,
  };
}

export default async function OperationAreaDetailPage({ params }: PageProps) {
  const [operationAreas, selectedArea] = await Promise.all([
    sanityClient.fetch(allOperationAreasQuery),
    sanityClient.fetch(operationAreaByIdQuery, { id: params.id }),
  ]);

  if (!selectedArea) {
    notFound();
  }

  return <OperationAreaScreen operationAreas={operationAreas ?? []} selectedAreaId={params.id} />;
}
