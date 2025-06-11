'use client';

import { Container, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props {
  bgcolor?: string;
}

export const ViewContainer: React.FC<PropsWithChildren<Props>> = ({ children, bgcolor }) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh',
        bgcolor: bgcolor ?? theme.palette.background.paper,
      }}
    >
      {children}
    </Container>
  );
};
