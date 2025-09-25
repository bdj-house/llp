import { Article } from '@/sanity/types/schema';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useMemo } from 'react';
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
  }, [article, height, width]);

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 200, md: height },
        width: { xs: '100%', md: width },
        flex: { xs: '0 0 auto', md: 'none' },
      }}
    >
      <Image
        src={imageSource}
        alt={alt}
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          borderTopLeftRadius: 18,
          borderBottomLeftRadius: 18,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};
