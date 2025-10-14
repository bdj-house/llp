export const articleByIdQuery = `*[_type == "article" && _id == $id][0] {
  _id,
  title,
  content,
  excerpt,
  publishedAt,
  author,
  tags,
  coverImage
}`;

export const allArticlesQuery = `*[_type == "article"] | order(publishedAt desc){
  _id,
  title,
  excerpt,
  publishedAt,
  author,
  tags,
  sourceLink,
  coverImage,
  "hasContent": defined(content)
}`;

export const paginatedArticlesQuery = `
  *[_type == "article"
    && (!defined($search) || $search == "" || lower(title) match "*" + lower($search) + "*")
    && (!defined($tags) || length($tags) == 0 || count(tags[@ in $tags]) > 0)
  ]
  | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    excerpt,
    publishedAt,
    tags,
    sourceLink,
    coverImage,
    "hasContent": defined(content)
  }
`;

export const lastArticlesQuery = `*[_type == "article"] | order(publishedAt desc)[0...4] {
  _id,
  title,
  excerpt,
  publishedAt,
  author,
  tags,
  sourceLink,
  coverImage,
  "hasContent": defined(content)
}`;

export const allTagsQuery = `
  array::unique(*[_type == "article" && defined(tags)].tags[])
`;
