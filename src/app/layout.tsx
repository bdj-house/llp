import { ThemeRegistry } from '@/config/theme';
import { champagneFont, mangolaineFont } from '@/config/theme/fonts';
import { sanityClient } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/queries';
import { analyticsMeta, schemaOrg, metadata as seoMetadata } from '@/shared/constants';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = seoMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  // Prefetch singleton settings once and hydrate to React Query
  await queryClient.prefetchQuery({
    queryKey: ['siteSettings'],
    queryFn: () => sanityClient.fetch(siteSettingsQuery),
    staleTime: 60 * 60 * 1000,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: analyticsMeta }}
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.idalgocortijo.com.br/" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${champagneFont.variable} ${mangolaineFont.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-528JN7VG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            sandbox=""
          />
        </noscript>
        <ThemeRegistry initialQueryState={dehydratedState}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
