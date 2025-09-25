import { Box } from '@mui/material';
import Image from 'next/image';

interface Props {
  imageUrl?: string;
}

export const Art: React.FC<Props> = ({ imageUrl }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '60vh', md: '100vh' },
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Imagem principal"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
          priority
          fetchPriority="high"
          style={{
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      )}
    </Box>
  );
};
