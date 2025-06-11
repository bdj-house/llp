import { Container } from '@mui/material';
import { Metadata } from 'next';
import { mainPageMetadata } from '@/shared/constants';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return mainPageMetadata;
}

export default async function Page() {
  return <Container maxWidth={false} />;
}
