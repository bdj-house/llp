import { OperationAreaScreen } from '@/features/OperationArea/screen';
import { sanityClient } from '@/sanity/lib/client';
import { allOperationAreasQuery } from '@/sanity/queries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Áreas de Atuação - Idalgo & Cortijo',
  description:
    'Conheça as áreas de atuação e especializações da Idalgo & Cortijo em direito civil, trabalhista, previdenciário e mais.',
};

export default async function AreasAtuacaoPage() {
  const operationAreas = await sanityClient.fetch(allOperationAreasQuery);

  return <OperationAreaScreen operationAreas={operationAreas ?? []} />;
}
