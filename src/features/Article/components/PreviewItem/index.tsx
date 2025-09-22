import { Article } from '@/sanity/types/schema';
import { If } from '@/shared/components';
import { alpha, Box, Card, CardContent, Chip, Tooltip, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useMemo } from 'react';
import { getArticleCoverImg, getArticleDate } from '../../utils';
import { calculateReadingTime } from '../../utils/data';

interface Props {
  article: Article;
  isHighlight?: boolean;
  index?: number;
}

export const PreviewItem: React.FC<Props> = ({ article, isHighlight, index = 0 }) => {
  const theme = useTheme();

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

  return (
    <Card
      sx={{
        height,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 0,
        borderTop: '0.3px solid black',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 0.5,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          height: '70%',
          bgcolor: alpha(theme.palette.background.default, 0.2),
        }}
      >
        <Image
          alt={article.title ?? ''}
          src={imageSource}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          priority={index < 3}
        />

        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 8,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {article.tags?.slice(0, 3).map(tag => (
            <Chip label={tag} key={tag} color="secondary" size="small" />
          ))}

          {(article.tags?.length ?? 0) > 3 && (
            <Chip label={`+${(article.tags?.length ?? 0) - 3}`} color="secondary" size="small" />
          )}
        </Box>
      </Box>

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 500,
          flex: 1,
          height: '30%',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption">{getArticleDate(article)}</Typography>
          <Typography variant="caption">{readTime}</Typography>
        </Box>

        <Tooltip title={article.title}>
          <Typography
            variant={isHighlight ? 'h4' : 'h6'}
            fontWeight="bold"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: isHighlight ? 4 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {article.title}
          </Typography>
        </Tooltip>

        <If condition={isHighlight}>
          <Typography
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mt: 2,
            }}
          >
            {article.excerpt}
          </Typography>
        </If>
      </CardContent>
    </Card>
  );
};
