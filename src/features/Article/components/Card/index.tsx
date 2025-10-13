'use client';

import { Article } from '@/sanity/types/schema';
import { OpacityCard } from '@/shared/components';
import { alpha, Box, Card, useTheme } from '@mui/material';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardImage } from './CardImage';

interface Props {
  article: Article;
  isVertical?: boolean;
  isDark?: boolean;
  index: number;
}

const VERTICAL_CARD_WIDTH = 280;
const VERTICAL_CARD_HEIGHT = 580;

const HORIZONTAL_CARD_WIDTH = 580;
const HORIZONTAL_CARD_HEIGHT = 280;

const MOBILE_CARD_HEIGHT = 580;

export const ArticleCard: React.FC<Props> = ({
  article,
  index,
  isVertical = false,
  isDark = false,
}) => {
  const theme = useTheme();

  const MOBILE_CARD_WIDTH = window?.innerWidth ? window.innerWidth - 60 : '100%';

  const height = isVertical ? VERTICAL_CARD_HEIGHT : HORIZONTAL_CARD_HEIGHT;
  const width = isVertical ? VERTICAL_CARD_WIDTH : HORIZONTAL_CARD_WIDTH;

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
          height: { xs: MOBILE_CARD_HEIGHT, md: height },
          width: { xs: MOBILE_CARD_WIDTH, md: width },
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
