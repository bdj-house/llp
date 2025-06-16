'use client';

import { Container, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props {
  secondaryBg?: boolean;
}

export const ViewContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  secondaryBg,
}) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        position: 'relative',
        minHeight: '100vh',
        bgcolor: secondaryBg
          ? theme.palette.background.default
          : theme.palette.background.paper,
      }}
    >
      {children}
    </Container>
  );
};
