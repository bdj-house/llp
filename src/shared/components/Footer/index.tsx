'use client';

import { useHeader } from '@/shared/hooks';
import { useGetOperationAreasForFooter, useGetSettings } from '@/shared/queries';
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

export const Footer = () => {
  const theme = useTheme();
  const { mode } = useHeader();

  const isHidden = mode === 'hidden';

  const { data: settings } = useGetSettings();
  const { data: operationAreas } = useGetOperationAreasForFooter();

  if (isHidden) {
    return null;
  }

  return (
    <Box bgcolor={theme.palette.background.default} py={{ xs: 4, md: 6 }} zIndex={999}>
      <Container>
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid size={{ xs: 12, md: 4 }}>
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

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="textSecondary">
              Áreas de atuação
            </Typography>
            <Grid container spacing={1}>
              <Grid size={{ xs: 12, md: 6 }}>
                {operationAreas?.slice(0, 3).map(area => (
                  <Typography key={area._id} variant="body2" color="textSecondary">
                    {area.title}
                  </Typography>
                ))}
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                {operationAreas?.slice(3, 6).map(area => (
                  <Typography key={area._id} variant="body2" color="textSecondary">
                    {area.title}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="textSecondary">
              Recursos
            </Typography>
            <Typography variant="body2" sx={{ textUnderlineOffset: 4 }}>
              <Link
                href="/publicacoes"
                underline="hover"
                color="textSecondary"
                sx={{ py: 1, display: 'inline-block' }}
              >
                Publicações
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ textUnderlineOffset: 4 }}>
              <Link
                href="/nosso-espaco"
                underline="hover"
                color="textSecondary"
                sx={{ py: 1, display: 'inline-block' }}
              >
                Nosso Espaço
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textUnderlineOffset: 4 }}>
              <Link
                href="/areas-atuacao"
                underline="hover"
                color="inherit"
                sx={{ py: 1, display: 'inline-block' }}
              >
                Áreas de atuação
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
              aria-label="Abrir Facebook"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              href={settings?.social?.linkedin || 'https://linkedin.com'}
              target="_blank"
              size="small"
              aria-label="Abrir LinkedIn"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              href={settings?.social?.instagram || 'https://instagram.com'}
              target="_blank"
              size="small"
              aria-label="Abrir Instagram"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
