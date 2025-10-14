import type { Article as SanityArticle } from '@/sanity/types/schema';

/**
 * Extended Article type with computed fields from GROQ queries
 */
export interface Article extends SanityArticle {
  /**
   * Flag indicating if the article has content (our own article)
   * vs being an external reference (sourceLink only)
   * Added via GROQ: "hasContent": defined(content)
   */
  hasContent?: boolean;
}

/**
 * Article preview for lists/grids
 */
export interface ArticlePreview
  extends Pick<
    Article,
    '_id' | 'title' | 'excerpt' | 'publishedAt' | 'author' | 'tags' | 'sourceLink' | 'coverImage'
  > {
  hasContent?: boolean;
}
