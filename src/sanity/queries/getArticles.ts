export const allArticlesQuery = `*[_type == "article"] | order(publishedAt desc){
  _id,
  title,
  content,
  excerpt,
  publishedAt,
  author,
  tags,
  sourceLink,
  coverImage {
    asset -> {
      _id,
      url
    }
  }
}`;
