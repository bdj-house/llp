import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

export const CenterBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{
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
