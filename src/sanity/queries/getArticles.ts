export const allArticlesQuery = `*[_type == "article"]{
  _id,
  title,
  content,
  excerpt,
  publishedAt,
  author,
  coverImage {
    asset -> {
      _id,
      url
    }
  }
}`;
