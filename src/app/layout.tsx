/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { Metadata } from "next";
import Script from "next/script";
import { ThemeRegistry } from "@/config/theme";
import { champagneFont, mangolaineFont } from "@/config/theme/fonts";
import {
  analyticsMeta,
  schemaOrg,
  metadata as seoMetadata,
} from "@/shared/constants";
import "./globals.css";

export const metadata: Metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: analyticsMeta,
          }}
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
            style={{ display: "none", visibility: "hidden" }}
            sandbox=""
          />
        </noscript>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
