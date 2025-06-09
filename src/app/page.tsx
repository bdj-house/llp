import { Container } from "@mui/material";
import { Metadata } from "next";
import { HomeScreen } from "@/features/Home/screen";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Idalgo Cortijo",
    description:
      "Página destinada à apresentação do Escritório de advocacia Idalgo Cortijo, localizada em Piracicaba, SP. Especializado em Direito Civil, Direito do Trabalho e Previdenciário. Consultas e suporte jurídico com excelência. ",
  };
}

export default async function HomePage() {
  // const about = await sanityClient.fetch<AboutPage[]>(aboutQuery);

  return (
    <Container>
      <HomeScreen />
    </Container>
  );
}
