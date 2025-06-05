export const allArticlesQuery = `*[_type == "article"]{
  _id,
  title,
  slug,
  publishedAt,
  coverImage {
    asset -> {
      _id,
      url
    }
  }
}`;
