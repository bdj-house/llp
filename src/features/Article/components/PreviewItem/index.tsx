import { Box, Card, CardContent, Chip, Typography } from '@mui/material';
import Image from 'next/image';
import { Article } from '@/sanity/types/schema';
import { getArticleCoverImg, getArticleDate } from '../../utils';

interface Props {
  article: Article;
  isHighlight?: boolean;
}

export const PreviewItem: React.FC<Props> = ({ article, isHighlight }) => {
  return (
    <Card sx={{ height: isHighlight ? 600 : 300, width: '100%', display: 'flex', flexDirection: 'column', boxShadow: 0 }}>
      <Box sx={{ position: 'relative', display: 'flex', height: '80%' }}>
        <Image
          alt={article.title ?? ''}
          src={getArticleCoverImg(article)}
          layout="fill"
          objectFit="contain"
        />

        <Box sx={{ position: 'absolute', bottom: 16, left: 8, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {article.tags?.map(tag => (
            <Chip label={tag} key={tag} color="secondary" />
          ))}
        </Box>

      </Box>

      <CardContent sx={{ display: 'flex', flexDirection: 'column', maxWidth: 500, flex: 1 }}>
        <Typography variant="caption">{getArticleDate(article)}</Typography>
        <Typography variant={isHighlight ? 'h4' : 'h6'} fontWeight="bold">{article.title}</Typography>
      </CardContent>
    </Card>
  );
};
