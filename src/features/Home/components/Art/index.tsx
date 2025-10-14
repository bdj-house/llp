import Image from 'next/image';
import { Box } from '@mui/material';

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
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </Box>
  );
};
