import { Box } from '@mui/material';
import Image from 'next/image';
import { useMemo } from 'react';
import { Article } from '@/sanity/types/schema';
import { getArticleCoverImg } from '../../utils';

interface Props {
  article: Article;
  alt: string;
  height: number;
  width: number;
}

export const CardImage: React.FC<Props> = ({ article, alt, height, width }) => {
  const imageSource = useMemo(() => {
    const imgHeight = (70 * height) / 100;
    return getArticleCoverImg(article, imgHeight, width);
  }, [height]);

  return (
    <Box sx={{ position: 'relative', height, width }}>
      <Image
        src={imageSource}
        alt={alt}
        fill
        style={{
          borderTopLeftRadius: 18,
          borderBottomLeftRadius: 18,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};
