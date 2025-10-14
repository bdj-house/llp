import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { Box, Typography, useTheme } from '@mui/material';
import { Article } from '@/sanity/types/schema';

interface Props {
  article: Article;
}

export const DetailsContent: React.FC<Props> = ({ article }) => {
  const theme = useTheme();

  const components = {
    types: {
      image: ({ value }: any) => (
        <Box my={4}>
          <Image
            src={value.asset.url}
            alt={value.alt || ' '}
            width={800}
            height={450}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
              borderRadius: 12,
            }}
          />
        </Box>
      ),
    },
    block: {
      h1: ({ children }: any) => (
        <Typography variant="h3" mt={6} mb={2} fontSize={28}>
          {children}
        </Typography>
      ),
      h2: ({ children }: any) => (
        <Typography variant="h4" mt={5} mb={2} color="secondary" fontSize={24}>
          {children}
        </Typography>
      ),
      normal: ({ children }: any) => {
        return (
          <Typography variant="body1" mb={2} lineHeight={1.7} color="text.primary" fontSize={20}>
            {children}
          </Typography>
        );
      },
    },
    list: {
      bullet: ({ children }: any) => (
        <Box component="ul" sx={{ pl: 3, mb: 2, color: 'secondary' }}>
          {children}
        </Box>
      ),
      number: ({ children }: any) => (
        <Box component="ol" sx={{ pl: 3, mb: 2, color: 'text.secondary' }}>
          {children}
        </Box>
      ),
    },
    marks: {
      strong: ({ children }: any) => <strong style={{ fontWeight: 700 }}>{children}</strong>,
      em: ({ children }: any) => <em>{children}</em>,
      link: ({ value, children }: any) => (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.palette.primary.main }}
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <Box mx="15%" mt={12} maxWidth="800px">
      <PortableText value={article.content ?? []} components={components} />
    </Box>
  );
};
