import { Box } from '@mui/material';
import Image from 'next/image';

interface Props {
  imageUrl?: string;
}

export const Art: React.FC<Props> = ({ imageUrl }) => {
  console.log('imageUrl', imageUrl);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        mx: 'auto',
      }}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Imagem principal"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          style={{ objectFit: 'contain' }}
        />
      )}
    </Box>
  );
};
