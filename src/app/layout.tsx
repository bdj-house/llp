import { ThemeRegistry } from "@/config/theme";
import { champagneFont, mangolaineFont } from "@/config/theme/fonts";
import type { Metadata } from "next";
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
      <body className={`${champagneFont.variable} ${mangolaineFont.variable}`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
