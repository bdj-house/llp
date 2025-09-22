import { Routes } from '@/config/routes';
import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container sx={{ py: 16, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Área de Atuação Não Encontrada
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        A área de atuação que você está procurando não foi encontrada.
      </Typography>
      <Button component={Link} href={Routes.OperationAreas} variant="contained" size="large">
        Voltar para Áreas de Atuação
      </Button>
    </Container>
  );
}
