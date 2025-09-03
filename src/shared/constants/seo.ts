export const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Idalgo Cortijo Advocacia',
  image: 'https://www.idalgocortijo.com.br/logo.png',
  '@id': 'https://www.idalgocortijo.com.br',
  url: 'https://www.idalgocortijo.com.br',
  telephone: '+55 19 99999-9999',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Exemplo, 123',
    addressLocality: 'Piracicaba',
    addressRegion: 'SP',
    postalCode: '13400-000',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.facebook.com/idalgoadv',
    'https://www.instagram.com/idalgoadv',
  ],
};

export const metadata = {
  title:
    'Idalgo Cortijo Advocacia | Piracicaba - Direito Civil, Trabalho e Previdenciário',
  description: `Escritório de advocacia em Piracicaba, SP. 
  Especializado em Direito Civil, Direito do Trabalho e Previdenciário. 
  Consultas e suporte jurídico com excelência.`,
  keywords: `advocacia, advogado Piracicaba, 
  direito civil, direito trabalhista, direito previdenciário, Idalgo Cortijo`,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.idalgocortijo.com.br',
    title: 'Idalgo Cortijo Advocacia',
    description:
      'Especialistas em Direito Civil, Trabalho e Previdenciário em Piracicaba.',
    siteName: 'Idalgo Cortijo Advocacia',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@idalgoadv',
  },
};

export const mainPageMetadata = {
  title: 'Publicações | Idalgo Cortijo',
  description: `Acompanhe nossas publicações 
    e artigos especializados em Direito Civil, Trabalho e Previdenciário.`,
  keywords: ['Advocacia', 'Direito', 'Artigos', 'Piracicaba'],
  openGraph: {
    title: 'Publicações | Idalgo Cortijo',
    description:
      'Explore artigos jurídicos especializados da equipe Idalgo Cortijo.',
    type: 'website',
    url: 'https://www.idalgocortijo.com.br/publicacoes',
    images: [
      {
        url: '/og-image.jpg',
        height: 630,
        alt: 'Idalgo Cortijo - Publicações',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publicações | Idalgo Cortijo',
    description:
      'Artigos especializados em Direito Civil, Trabalho e Previdenciário.',
  },
};
