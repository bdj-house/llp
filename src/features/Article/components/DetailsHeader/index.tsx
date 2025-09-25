import { Article } from '@/sanity/types/schema';
import { Box, Chip, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useMemo } from 'react';
import { getArticleCoverImg } from '../../utils';

interface Props {
  article: Article;
}

const HEADER_HEIGHT = 600;

export const DetailsHeader: React.FC<Props> = ({ article }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const imageSource = useMemo(() => {
    const imgHeight = (70 * HEADER_HEIGHT) / 100;
    return getArticleCoverImg(article, imgHeight);
  }, [article]);

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        height: isMobile ? 'auto' : HEADER_HEIGHT,
        maxWidth: '1200px',
        mx: 'auto',
        px: 4,
        gap: 6,
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <Box
        sx={{
          height: isMobile ? 300 : '100%',
          width: isMobile ? '100%' : '50%',
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: 3,
          '&:hover': {
            transform: 'scale(1.02)',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        <Image
          src={imageSource}
          alt={article.title ?? ''}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
      </Box>

      <Box sx={{ width: isMobile ? '100%' : '50%', mt: isMobile ? 2 : '10%' }}>
        {article.tags?.map(tag => (
          <Chip
            key={tag}
            label={tag}
            sx={{
              mr: 1,
              mb: 1,
              bgcolor: 'primary.light',
              color: 'background.paper',
            }}
          />
        ))}
        <Typography variant="h2" color="textSecondary" mt={2} mb={4}>
          {article.title}
        </Typography>
        {article.excerpt && (
          <Typography variant="body1" color="text.secondary">
            {article.excerpt}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
