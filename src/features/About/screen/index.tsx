'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { ViewContainer } from '@/shared/components';

export const AboutScreen: React.FC = () => {
  const theme = useTheme();
  return (
    <ViewContainer bgcolor={theme.palette.background.default}>
      <Box component="section" id="nosso-espaco">
        <Typography>Here</Typography>
      </Box>
    </ViewContainer>
  );
};
