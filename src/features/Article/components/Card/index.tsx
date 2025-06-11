'use client';

import { Box, Card, useTheme } from '@mui/material';
import { Article } from '@/sanity/types/schema';
import { getArticleCoverImg } from '../../utils';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardImage } from './CardImage';

interface Props {
  article: Article;
  isVertical?: boolean;
  isDark?: boolean;
}

const VERTICAL_CARD_WIDTH = 280;
const VERTICAL_CARD_HEIGHT = 580;

const HORIZONTAL_CARD_WIDTH = 580;
const HORIZONTAL_CARD_HEIGHT = 280;

export const ArticleCard: React.FC<Props> = ({
  article,
  isVertical = false,
  isDark = false,
}) => {
  const theme = useTheme();

  const height = isVertical ? VERTICAL_CARD_HEIGHT : HORIZONTAL_CARD_HEIGHT;
  const width = isVertical ? VERTICAL_CARD_WIDTH : HORIZONTAL_CARD_WIDTH;

  const imageHeight = isVertical ? height - 350 : height - 20;
  const imageWidth = isVertical ? width - 10 : width - 350;

  const bgColor = isDark
    ? theme.palette.common.black
    : theme.palette.background.paper;
  const textColor = isDark
    ? theme.palette.common.white
    : theme.palette.text.secondary;

  return (
    <Card
      sx={{
        bgcolor: bgColor,
        color: textColor,
        padding: 0.5,
        height,
        width,
        borderRadius: 6,
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
      }}
    >
      <CardImage
        alt="Imagem de Capa do artigo"
        src={getArticleCoverImg(article)}
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
  );
};
