import { Box } from '@mui/material';
import Image from 'next/image';
import testImage from '@/assets/images/main-6.png';

export const Art = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        mx: 'auto',
      }}
    >
      <Image
        src={testImage}
        alt="Logo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        style={{ objectFit: 'contain' }}
      />
    </Box>
  );
};
