'use client';

import { useEffect, useState } from 'react';
import { alpha, useMediaQuery, useTheme } from '@mui/material';
import { OpacityCard } from '@/shared/components';
import { CARD_DIMENSIONS } from '@/shared/constants';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardImage } from './CardImage';
import { CardContentWrapper, StyledCard } from './styles';
import { Article } from '../../types';

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
      <StyledCard
        bgColor={bgColor}
        textColor={textColor}
        height={height}
        width={width}
        mobileCardWidth={mobileCardWidth}
        isVertical={isVertical}
      >
        <CardImage
          alt="Imagem de Capa do artigo"
          article={article}
          height={imageHeight}
          width={imageWidth}
        />

        <CardContentWrapper>
          <CardContent article={article} isDark={isDark} />
          <CardFooter isDark={isDark} isVertical={isVertical} article={article} />
        </CardContentWrapper>
      </StyledCard>
    </OpacityCard>
  );
};
