import { Box, Typography, useTheme } from '@mui/material';

export const SummaryHeader = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: 18, py: 6 }}>
      <Typography
        variant="h4"
        color="primary"
        sx={{
          px: 2,
          pb: 1,
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: 0,
            height: 2,
            width: 32,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
          },
        }}
      >
        Publicações
      </Typography>

      <Typography variant="h6" color="textPrimary" mt={4}>
        Fique por dentro de diversos assuntos com as recomendações de
        publicações
      </Typography>
    </Box>
  );
};
