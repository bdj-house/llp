export const ourSpacePageQuery = `*[_id == "ourSpacePage"][0]{
  _id,
  headerTitle,
  headerSubtitle,
  headerSubject,
  sectionTitle,
  sectionParagraphs,
  address,
  hours,
  contactButtonLabel,
  contactButtonUrl,
  "gallery": gallery[]{
    "url": asset->url
  },
}`;
