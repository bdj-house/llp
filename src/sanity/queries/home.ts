export const homePageQuery = `*[_id == "homePage"][0]{
  _id,
  heroTitle,
  heroSubtitle,
  "heroLogo": heroLogo.asset->url,
  "mainImage": mainImage.asset->url,
}`;
