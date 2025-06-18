'use client';

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

  return (
    <Box bgcolor={theme.palette.background.default} py={6} zIndex={999}>
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid size={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Idalgo & Cortijo
            </Typography>
            <Link
              href="mailto:contato@idalgocortijo.com"
              underline="hover"
              color="textSecondary"
            >
              contato@idalgocortijo.com
            </Link>
            <Typography variant="body1" mt={1} color="textSecondary">
              (19) 91234-5678
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Seg - Sex, 9h às 17h
            </Typography>
          </Grid>

          <Grid size={4}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              gutterBottom
              color="textSecondary"
            >
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
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              gutterBottom
              color="textSecondary"
            >
              Recursos
            </Typography>
            <Typography variant="body2">
              <Link href="/publicacoes" underline="hover" color="textSecondary">
                Publicações
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link
                href="/nosso-espaco"
                underline="hover"
                color="textSecondary"
              >
                Nosso Espaço
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
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
            © {new Date().getFullYear()} Idalgo & Cortijo. Todos os direitos
            reservados.
          </Typography>

          <Box display="flex" gap={1}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              size="small"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              size="small"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://instagram.com"
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
