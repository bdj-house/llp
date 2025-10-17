import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { Box, Fade, Typography, useTheme } from '@mui/material';
import { OperationArea } from '../../types';

interface Props {
  operationArea: OperationArea;
}

export const DetailsContent: React.FC<Props> = ({ operationArea }) => {
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
            sizes="(max-width: 900px) 100vw, 800px"
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
        <Typography variant="h3" mt={6} mb={2}>
          {children}
        </Typography>
      ),
      h2: ({ children }: any) => (
        <Typography variant="h4" mt={5} mb={2} color="secondary">
          {children}
        </Typography>
      ),
      normal: ({ children }: any) => {
        return (
          <Typography variant="body1" mb={2} fontSize={20} lineHeight={1.7} color="text.primary">
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
    <Fade in timeout={500} key={operationArea._id}>
      <Box my={{ xs: 3, md: 6 }} maxWidth="800px">
        <PortableText value={operationArea.content ?? []} components={components} />
      </Box>
    </Fade>
  );
};
