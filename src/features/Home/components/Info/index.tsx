import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { IconButton } from '@/shared/components';

interface Props {
  logoUrl?: string;
  title?: string;
  subtitle?: string;
}

export const Info: React.FC<Props> = ({ logoUrl, title, subtitle }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const goToOurTeam = () => {
    const section = document.getElementById('our-team');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '80%' },
        textAlign: { xs: 'center', md: 'left' },
        px: { xs: 2, md: 0 },
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            ml: { xs: 0, md: 4 },
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          {logoUrl && (
            <Image
              src={logoUrl}
              alt="Logo"
              width={480}
              height={270}
              priority
              style={{
                maxWidth: '100%',
                height: 'auto',
                width: 'clamp(280px, 100%, 480px)',
              }}
            />
          )}
        </Box>

        {!!title && (
          <Typography
            variant="h5"
            color="secondary"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              mt: { xs: 2, md: 0 },
            }}
          >
            {title}
          </Typography>
        )}

        {!!subtitle && (
          <Typography
            variant="h6"
            color="textSecondary"
            mt={2}
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      {!isMobile && (
        <Box
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            left: { xs: 'auto', md: 0 },
            bottom: { xs: 'auto', md: '15%' },
            mt: { xs: 4, md: 0 },
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <IconButton action={goToOurTeam} size="large" ariaLabel="Ir para nossa equipe">
            <ExpandMoreIcon color="primary" sx={{ fontSize: { xs: 36, md: 48 } }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
