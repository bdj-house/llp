import { useMemo } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
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
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjVmNWY1O3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2UwZTBlMDtzdG9wLW9wYWNpdHk6MSIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PC9zdmc+"
        style={{
          borderTopLeftRadius: 18,
          borderBottomLeftRadius: 18,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
          objectFit: 'fill',
        }}
      />
    </Box>
  );
};
