'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import { If } from '../If';

interface Props {
  secondaryBg?: boolean;
  header?: {
    title: string;
    subtitle?: string;
    subject?: string;
  };
  rightDivider?: boolean;
  hideDivider?: boolean;
  id?: string;
}

export const ViewContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  secondaryBg,
  header,
  rightDivider,
  hideDivider,
  id,
}) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        position: 'relative',
        minHeight: '98vh',
        width: '98%',
        pt: 6,
        bgcolor: secondaryBg
          ? theme.palette.background.default
          : theme.palette.background.paper,
      }}
      id={id}
    >
      <If condition={!!header}>
        <Box
          sx={{
            px: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            color="secondary"
            variant="caption"
            fontWeight={600}
            gutterBottom
            sx={{ px: 2, pb: 1, fontSize: '1em' }}
          >
            {header?.subtitle}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
            fontWeight={600}
            sx={{ px: 2, pb: 1 }}
          >
            {header?.title}
          </Typography>

          <If
            condition={!!header?.subtitle}
            sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <Typography
              variant="h6"
              textAlign="center"
              mt={1}
              mb={6}
              color="text.primary"
              maxWidth="60%"
            >
              {header?.subject}
            </Typography>
          </If>
        </Box>
      </If>

      {children}

      <If condition={!hideDivider}>
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          mt={12}
          sx={{
            width: '100%',
            height: 50,
            fill: theme.palette.background.default,
            transform: rightDivider ? 'scaleX(-1)' : 'none',
          }}
        >
          <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" />
        </Box>
      </If>
    </Container>
  );
};
