import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import testImage from '@/assets/logo/temp-logo.png';
import { IconButton } from '@/shared/components';

export const Info = () => {
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
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 12 }}>
          <Image src={testImage} alt="Logo" width={480} height={280} />
        </Box>

        <Typography variant="h5" color="secondary">
          Excelência em cada detalhe
        </Typography>

        <Typography variant="h6" color="textSecondary" mt={2}>
          Conheça um escritório pensado para inspirar confiança conforto e resultados
          <br />
          de alto nível.
        </Typography>
      </Box>

      <Box sx={{ position: 'absolute', left: 0, bottom: '15%' }}>
        <IconButton action={goToOurTeam} size="large">
          <ExpandMoreIcon color="primary" sx={{ fontSize: 48 }} />
        </IconButton>
      </Box>
    </Box>
  );
};
