import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';
import { useGetSettings } from '@/shared/queries';

type Props = {
  title: string;
  description: string;
  buttonLabel?: string;
  icon?: React.ReactNode;
};

export const HelperPanel = ({ title, description, buttonLabel, icon }: Props) => {
  const { data } = useGetSettings();

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

      <Typography variant="h6" fontWeight="bold" mb={2} color="text.primary">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        {description}
      </Typography>
      <Button
        component={Link}
        variant="contained"
        size="large"
        href={`mailto:${data?.email ?? 'contato@idalgocortijo.com.br'}`}
        aria-label="Contate-nos"
        sx={{ minWidth: 200 }}
      >
        {buttonLabel || 'Contate-nos'}
      </Button>
    </Box>
  );
};
