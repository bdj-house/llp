import { Box, Button, Typography } from '@mui/material';
import { useContact } from '@/shared/hooks';

type Props = {
  title: string;
  description: string;
  buttonLabel?: string;
  icon?: React.ReactNode;
};

export const HelperPanel = ({ title, description, buttonLabel, icon }: Props) => {
  const { goToContact } = useContact();

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 4,
        backgroundColor: 'grey.50',
        borderRadius: 2,
        border: 1,
        borderColor: 'divider',
      }}
    >
      {icon && <Box sx={{ mb: 2 }}>{icon}</Box>}

      <Typography variant="h6" fontWeight="bold" mb={2}>
        {title}
      </Typography>
      <Typography variant="body1" mb={3}>
        {description}
      </Typography>
      <Button
        onClick={() => goToContact({ message: 'Olá, gostaria de agendar uma consulta' })}
        variant="contained"
        size="large"
        aria-label="Contate-nos"
        sx={{ minWidth: 200, fontWeight: 600 }}
      >
        {buttonLabel || 'Contate-nos'}
      </Button>
    </Box>
  );
};
