import { Box, Button, Typography } from '@mui/material';

export const ContactCallToAction = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 6,
        px: 4,
        bgcolor: 'background.default',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Precisa de Ajuda Jurídica?
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Nossa equipe está pronta para atender você com excelência e dedicação. Entre em contato e
        agende uma consulta personalizada.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          bgcolor: 'primary.main',
          px: 4,
          py: 1.5,
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        Agendar Consulta
      </Button>
    </Box>
  );
};
