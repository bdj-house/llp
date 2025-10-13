'use client';

import { Routes } from '@/config/routes';
import { HelperPanel, ViewContainer } from '@/shared/components';
import { useGetSettings } from '@/shared/queries';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessIcon from '@mui/icons-material/Business';
import GavelIcon from '@mui/icons-material/Gavel';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  const theme = useTheme();

  const { data: settings } = useGetSettings();

  const quickLinks = [
    {
      title: 'Página Inicial',
      description: 'Volte ao início e navegue pelo nosso site',
      icon: <HomeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      href: Routes.Home,
      color: 'primary',
    },
    {
      title: 'Áreas de Atuação',
      description: 'Conheça nossos serviços jurídicos',
      icon: <GavelIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      href: Routes.OperationAreas,
      color: 'secondary',
    },
    {
      title: 'Publicações',
      description: 'Leia nossos artigos e insights jurídicos',
      icon: <ArticleIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      href: Routes.Articles,
      color: 'success',
    },
    {
      title: 'Nosso Espaço',
      description: 'Conheça nosso escritório e ambiente',
      icon: <BusinessIcon sx={{ fontSize: 40, color: 'info.main' }} />,
      href: Routes.OurSpace,
      color: 'info',
    },
  ];

  return (
    <ViewContainer isPageContainer>
      <Container sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '4rem', md: '6rem' },
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 2,
              opacity: 0.1,
            }}
          >
            404
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2} color="text.primary">
            Página Não Encontrada
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4} maxWidth="600px" mx="auto">
            Parece que você se perdeu! A página que você está procurando não existe ou foi movida.
            Use os links abaixo para navegar para uma das nossas páginas principais.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4} color="text.primary">
            Navegação Rápida
          </Typography>
          <Grid container spacing={3}>
            {quickLinks.map((link, index) => (
              <Grid
                size={3}
                py={1}
                key={index}
                sx={{
                  '&:hover': {
                    boxShadow: theme.shadows[4],
                    borderColor: `${link.color}.main`,
                  },
                }}
              >
                <Paper
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  component={Link}
                  href={link.href}
                >
                  <Box sx={{ mb: 2, py: 3 }}>{link.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" mb={1} color="text.primary">
                    {link.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {link.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <HelperPanel
          title="Ainda não encontrou o que procura?"
          description="Nossa equipe está pronta para ajudá-lo. Entre em contato conosco e teremos prazer em esclarecer suas dúvidas."
          icon={<SearchIcon sx={{ fontSize: 48, color: 'text.secondary' }} />}
        />

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Se você acredita que isso é um erro, por favor{' '}
            <Button
              component={Link}
              href={`mailto:${settings?.email ?? 'contato@idalgocortijo.com.br'}`}
              variant="text"
              size="small"
              sx={{ textDecoration: 'underline', pb: 1, px: 0, minWidth: 'auto' }}
            >
              entre em contato
            </Button>{' '}
            conosco.
          </Typography>
        </Box>
      </Container>
    </ViewContainer>
  );
}
