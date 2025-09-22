'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import { PropsWithChildren, useMemo } from 'react';
import { If } from '../If';

interface Props {
  customBg?: boolean;
  header?: {
    title: string;
    subtitle?: string;
    subject?: string;
  };
  id?: string;
  isPageContainer?: boolean;
}

export const ViewContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  customBg,
  header,
  id,
  isPageContainer,
}) => {
  const theme = useTheme();

  const additionalProps = useMemo(() => {
    if (!customBg) return {};

    return {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='40' fill='white'/%3E%3Cline x1='0' y1='39.5' x2='100' y2='39.5' stroke='%23e0dcd4' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '100px 40px',
    };
  }, [customBg]);

  return (
    <Container
      maxWidth={false}
      sx={{
        position: 'relative',
        minHeight: isPageContainer ? '100vh' : 'auto',
        pt: isPageContainer ? 12 : 0,
        width: '98%',
        bgcolor: theme.palette.background.paper,
        ...additionalProps,
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
          <Typography color="textPrimary" variant="h3" fontWeight={600} sx={{ px: 2, pb: 1 }}>
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
    </Container>
  );
};
