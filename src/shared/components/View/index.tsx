'use client';

import { Container, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

export const ViewContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        bgcolor: theme.palette.background.default,
      }}
    >
      {children}
    </Container>
  );
};
