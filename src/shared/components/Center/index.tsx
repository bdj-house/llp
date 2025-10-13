import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';

export const CenterBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};
