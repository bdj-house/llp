import { Box, Typography, useTheme } from '@mui/material';
import { Article } from '@/sanity/types/schema';

interface Props {
  article: Article;
  isDark: boolean;
}

export const CardContent: React.FC<Props> = ({ article, isDark }) => {
  const theme = useTheme();

  const secondaryTextColor = isDark
    ? theme.palette.background.paper
    : theme.palette.secondary.dark;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        alignItems: 'flex-start',
        mt: 1,
        width: '100%',
        flex: 1,
      }}
    >
      <Typography variant="body1" fontWeight={700}>
        {article.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: secondaryTextColor,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '6',
          WebkitBoxOrient: 'vertical',
        }}
      >
        {article.excerpt}
      </Typography>
    </Box>
  );
};
