import { useMemo } from 'react';
import Image from 'next/image';
import { Chip, Tooltip } from '@mui/material';
import { Article } from '@/sanity/types/schema';
import { If } from '@/shared/components';
import {
  DateReadTimeContainer,
  ImageContainer,
  StyledCard,
  StyledCardContent,
  StyledExcerpt,
  StyledTitle,
  TagsContainer,
} from './styles';
import { getArticleCoverImg, getArticleDate, hasArticleCoverImage } from '../../utils';
import { calculateReadingTime } from '../../utils/data';

interface Props {
  article: Article;
  isHighlight?: boolean;
  index?: number;
}

const MAX_TAGS = 3;

export const PreviewItem: React.FC<Props> = ({ article, isHighlight, index = 0 }) => {
  const height = useMemo(() => (isHighlight ? 800 : 400), [isHighlight]);

  const imageSource = useMemo(() => {
    const imgHeight = (70 * height) / 100;
    return getArticleCoverImg(article, imgHeight);
  }, [article, height]);

  const readTime = useMemo(() => {
    if (!article.content) {
      return '';
    }

    return calculateReadingTime(article.content);
  }, [article.content]);

  const tags = useMemo(() => {
    if (!article.tags) {
      return [];
    }

    return article.tags?.filter(tag => tag).slice(0, 3);
  }, [article.tags]);

  return (
    <StyledCard isHighlight={isHighlight ?? false}>
      <ImageContainer>
        <Image
          alt={article.title ?? ''}
          src={imageSource}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          priority={index < 3 && hasArticleCoverImage(article)}
        />

        <TagsContainer>
          {tags.map(tag => (
            <Chip label={tag} key={tag} color="secondary" size="small" sx={{ fontWeight: 700 }} />
          ))}

          {tags.length > MAX_TAGS && (
            <Chip label={`+${(tags.length ?? 0) - MAX_TAGS}`} color="secondary" size="small" />
          )}
        </TagsContainer>
      </ImageContainer>

      <StyledCardContent>
        <DateReadTimeContainer>
          <Tooltip title={getArticleDate(article)}>
            <span>{getArticleDate(article)}</span>
          </Tooltip>
          <Tooltip title={readTime}>
            <span>{readTime}</span>
          </Tooltip>
        </DateReadTimeContainer>

        <Tooltip title={article.title}>
          <StyledTitle variant={isHighlight ? 'h4' : 'h6'} isHighlight={isHighlight ?? false}>
            {article.title}
          </StyledTitle>
        </Tooltip>

        <If condition={isHighlight}>
          <StyledExcerpt>{article.excerpt}</StyledExcerpt>
        </If>
      </StyledCardContent>
    </StyledCard>
  );
};
