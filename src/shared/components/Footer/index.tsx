'use client';

import { sanityClient } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/queries';
import { useHeader } from '@/shared/hooks';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';

export const Footer = () => {
  const theme = useTheme();
  const { mode } = useHeader();

  const isHidden = mode === 'hidden';

  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(siteSettingsQuery)
      .then(setSettings)
      .catch(() => undefined);
  }, []);

  if (isHidden) {
    return null;
  }

  return (
    <Box bgcolor={theme.palette.background.default} py={6} zIndex={999}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
          <Grid size={4}>
            <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
              {settings?.siteName || 'Idalgo & Cortijo'}
            </Typography>
            <Link
              href={settings?.email ? `mailto:${settings?.email}` : undefined}
              underline="hover"
              color="text.primary"
              sx={{ textUnderlineOffset: 4 }}
            >
              {settings?.email || 'contato@idalgocortijo.com'}
            </Link>
            <Typography variant="body1" mt={1} color="textSecondary">
              <Link
                href={settings?.phone ? `tel:${settings?.phone}` : undefined}
                underline="hover"
                color="text.primary"
                sx={{ textUnderlineOffset: 4 }}
              >
                {settings?.phone || '(19) 91234-5678'}
              </Link>
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {settings?.businessHours || 'Seg - Sex, 9h às 17h'}
            </Typography>
          </Grid>

          <Grid size={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="textSecondary">
              Áreas de atuação
            </Typography>
            <Grid container spacing={1}>
              <Grid size={6}>
                <Typography variant="body2" color="textSecondary">
                  Direito Civil
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Direito Trabalhista
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Direito Previdenciário
                </Typography>
              </Grid>
              <Grid size={6}>
                <Typography variant="body2" color="textSecondary">
                  Família e Sucessões
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Consumidor
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Contratos
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="textSecondary">
              Recursos
            </Typography>
            <Typography variant="body2" sx={{ textUnderlineOffset: 4 }}>
              <Link href="/publicacoes" underline="hover" color="textSecondary">
                Publicações
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ textUnderlineOffset: 4 }}>
              <Link href="/nosso-espaco" underline="hover" color="textSecondary">
                Nosso Espaço
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textUnderlineOffset: 4 }}>
              <Link href="/contato" underline="hover" color="inherit">
                Contato
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Divider and Bottom Bar */}
        <Divider sx={{ my: 4 }} />

        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          gap={2}
        >
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Idalgo & Cortijo. Todos os direitos reservados.
          </Typography>

          <Box display="flex" gap={1}>
            <IconButton
              href={settings?.social?.facebook || 'https://facebook.com'}
              target="_blank"
              size="small"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              href={settings?.social?.linkedin || 'https://linkedin.com'}
              target="_blank"
              size="small"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              href={settings?.social?.instagram || 'https://instagram.com'}
              target="_blank"
              size="small"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
