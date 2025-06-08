import { Container } from "@mui/material";
import { HomeScreen } from "@/features/Home/screen";

export const dynamic = "force-static";

export default async function HomePage() {
  // const about = await sanityClient.fetch<AboutPage[]>(aboutQuery);

  return (
    <Container>
      <HomeScreen />
    </Container>
  );
}
