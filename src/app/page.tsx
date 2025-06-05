import { HomeScreen } from "@/features/Home/screen";
import { sanityClient } from "@/sanity/lib/client";
import { aboutQuery } from "@/sanity/queries";
import { AboutPage } from "@/sanity/types/schema";

export const dynamic = "force-static";

export default async function HomePage() {
  const about = await sanityClient.fetch<AboutPage[]>(aboutQuery);

  return <HomeScreen />;
}
