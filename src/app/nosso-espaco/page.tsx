import main5 from '@/assets/images/main-5.png';
import main6 from '@/assets/images/main-6.png';
import test2 from '@/assets/images/test-2.jpg';
import woman1 from '@/assets/images/woman-1.jpg';
import OurSpaceScreen from '@/features/OurSpace/screen';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosso Espaço | Idalgo Cortijo',
  description:
    'Conheça nosso escritório: um ambiente acolhedor e preparado para atendê-lo com excelência e privacidade, em Piracicaba - SP.',
};

export default function OurSpacePage() {
  return <OurSpaceScreen images={{ main5, main6, test2, woman1 }} />;
}
