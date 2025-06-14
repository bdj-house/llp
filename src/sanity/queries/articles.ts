export const articleByIdQuery = `*[_type == "article" && _id == $id][0] {
  _id,
  title,
  content,
  excerpt,
  publishedAt,
  author,
  tags,
  coverImage {
    asset -> {
      _id,
      url
    }
  }
}`;

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
