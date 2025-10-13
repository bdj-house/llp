'use client';

import { useEffect, useState } from 'react';
import { alpha, Box, Card, useMediaQuery, useTheme } from '@mui/material';
import { Article } from '@/sanity/types/schema';
import { OpacityCard } from '@/shared/components';
import { CARD_DIMENSIONS } from '@/shared/constants';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardImage } from './CardImage';

interface Props {
  article: Article;
  isVertical?: boolean;
  isDark?: boolean;
  index: number;
}

export const ArticleCard: React.FC<Props> = ({
  article,
  index,
  isVertical = false,
  isDark = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileCardWidth, setMobileCardWidth] = useState<number | string>('100%');

  useEffect(() => {
    if (typeof window !== 'undefined' && isMobile) {
      setMobileCardWidth(window.innerWidth - CARD_DIMENSIONS.MOBILE.PADDING);

      const handleResize = () => {
        setMobileCardWidth(window.innerWidth - CARD_DIMENSIONS.MOBILE.PADDING);
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isMobile]);

  const height = isVertical ? CARD_DIMENSIONS.VERTICAL.HEIGHT : CARD_DIMENSIONS.HORIZONTAL.HEIGHT;
  const width = isVertical ? CARD_DIMENSIONS.VERTICAL.WIDTH : CARD_DIMENSIONS.HORIZONTAL.WIDTH;

  const imageHeight = isVertical ? height - 350 : height;
  const imageWidth = isVertical ? width - 10 : width - 350;

  const bgColor = isDark ? alpha(theme.palette.common.black, 0.8) : theme.palette.background.paper;
  const textColor = isDark ? theme.palette.common.white : theme.palette.text.secondary;

  return (
    <OpacityCard index={index}>
      <Card
        sx={{
          bgcolor: bgColor,
          color: textColor,
          padding: 0.5,
          height: { xs: CARD_DIMENSIONS.MOBILE.HEIGHT, md: height },
          width: { xs: mobileCardWidth, md: width },
          maxWidth: { xs: '100%', md: 'none' },
          borderRadius: 6,
          display: 'flex',
          flexDirection: { xs: 'column', md: isVertical ? 'column' : 'row' },
          boxShadow: 3,
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            boxShadow: 6,
            transform: 'scale(1.010)',
          },
        }}
      >
        <CardImage
          alt="Imagem de Capa do artigo"
          article={article}
          height={imageHeight}
          width={imageWidth}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            px: 3,
            py: 1,
            flex: 1,
            mt: 1,
          }}
        >
          <CardContent article={article} isDark={isDark} />

          <CardFooter isDark={isDark} isVertical={isVertical} article={article} />
        </Box>
      </Card>
    </OpacityCard>
  );
};
