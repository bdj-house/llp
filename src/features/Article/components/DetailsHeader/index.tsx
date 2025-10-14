import { useMemo } from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Article } from '@/sanity/types/schema';
import {
  ContentContainer,
  HEADER_HEIGHT,
  HeaderContainer,
  ImageContainer,
  TagChip,
} from './styles';
import { getArticleCoverImg } from '../../utils';

interface Props {
  article: Article;
}

export const DetailsHeader: React.FC<Props> = ({ article }) => {
  const imageSource = useMemo(() => {
    const imgHeight = (70 * HEADER_HEIGHT) / 100;
    return getArticleCoverImg(article, imgHeight);
  }, [article]);

  return (
    <HeaderContainer>
      <ImageContainer>
        <Image
          src={imageSource}
          alt={article.title ?? ''}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>

      <ContentContainer>
        {article.tags?.map(tag => (
          <TagChip key={tag} label={tag} />
        ))}

        <Typography variant="h2" color="textSecondary" mt={2} mb={4}>
          {article.title}
        </Typography>

        {article.excerpt && (
          <Typography variant="body1" color="text.secondary">
            {article.excerpt}
          </Typography>
        )}
      </ContentContainer>
    </HeaderContainer>
  );
};
