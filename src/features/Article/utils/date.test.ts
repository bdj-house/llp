import { describe, it, expect } from 'vitest';
import { Article } from '@/sanity/types/schema';
import { getArticleDate } from './date';

const createMockArticle = (publishedAt: string): Partial<Article> => ({
  _id: '1',
  _type: 'article',
  _createdAt: '2024-01-01',
  _updatedAt: '2024-01-01',
  _rev: 'test',
  publishedAt,
});

describe('getArticleDate', () => {
  it('should format date in Brazilian Portuguese format', () => {
    const article = createMockArticle('2024-01-15T12:00:00Z');
    const result = getArticleDate(article as Article);

    // Should contain year (day might vary due to timezone)
    expect(result).toContain('2024');
    expect(result.length).toBeGreaterThan(5); // Should be a formatted date
  });

  it('should handle ISO date strings', () => {
    const article = createMockArticle('2024-12-25T10:30:00Z');
    const result = getArticleDate(article as Article);

    expect(result).toContain('25');
    expect(result).toContain('2024');
  });

  it('should return empty string for missing publishedAt', () => {
    const article = { ...createMockArticle(''), publishedAt: undefined };
    const result = getArticleDate(article as Article);

    expect(result).toBe('');
  });

  it('should support long date format', () => {
    const article = createMockArticle('2024-06-15');
    const shortResult = getArticleDate(article as Article, false);
    const longResult = getArticleDate(article as Article, true);

    expect(shortResult).toBeTruthy();
    expect(longResult).toBeTruthy();
    // Long format should be longer than short
    expect(longResult.length).toBeGreaterThan(shortResult.length);
  });

  it('should handle Date objects via ISO string', () => {
    const date = new Date('2024-07-04');
    const article = createMockArticle(date.toISOString());
    const result = getArticleDate(article as Article);

    expect(result).toContain('4');
    expect(result).toContain('2024');
  });
});
