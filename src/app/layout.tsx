import type { Metadata } from "next";
import { BabelFileMetadata } from "@babel/core";
import Script from "next/script";
import { ThemeRegistry } from "@/config/theme";
import { champagneFont, mangolaineFont } from "@/config/theme/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idalgo Cortijo Advocacia",
  description:
    "Idalgo Cortijo escritório de advocacia em Piracicaba, São Paulo. Especializado em Direito Civil, Direito do Trabalho e Direito Previdenciário.",
};

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
          // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
          dangerouslySetInnerHTML={        {
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-528JN7VG');
            `,
          }}
        />
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
