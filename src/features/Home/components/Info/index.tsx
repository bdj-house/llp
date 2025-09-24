import { IconButton } from '@/shared/components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
  logoUrl?: string;
  title?: string;
  subtitle?: string;
}

export const Info: React.FC<Props> = ({ logoUrl, title, subtitle }) => {
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
        width: '80%',
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 4 }}>
          {logoUrl && <Image src={logoUrl} alt="Logo" width={480} height={280} />}
        </Box>

        {!!title && (
          <Typography variant="h5" color="secondary">
            {title}
          </Typography>
        )}

        {!!subtitle && (
          <Typography variant="h6" color="textSecondary" mt={2}>
            {subtitle}
          </Typography>
        )}
      </Box>

      <Box sx={{ position: 'absolute', left: 0, bottom: '15%' }}>
        <IconButton action={goToOurTeam} size="large">
          <ExpandMoreIcon color="primary" sx={{ fontSize: 48 }} />
        </IconButton>
      </Box>
    </Box>
  );
};
