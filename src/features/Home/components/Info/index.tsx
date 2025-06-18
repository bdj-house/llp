import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, ButtonBase, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import testImage from '@/assets/logo/temp-logo.png';

export const Info = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 12 }}>
          <Image src={testImage} alt="Logo" width={480} height={280} />
        </Box>

        <Typography variant="h5" color="secondary">
          Excelência em cada detalhe
        </Typography>

        <Typography variant="h6" color="textSecondary" mt={2}>
          Conheça um escritório pensado para inspirar confiança conforto e
          resultados
          <br />
          de alto nível.
        </Typography>
      </Box>

      <ButtonBase
        onClick={() => {
          const section = document.getElementById('our-team');
          section?.scrollIntoView({ behavior: 'smooth' });
        }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          gap: 1,
          left: '120px',
          bottom: '25%',
          border: `0.8px solid ${theme.palette.primary.dark}`,
          borderRadius: '50%',
        }}
      >
        <ExpandMoreIcon color="primary" sx={{ fontSize: 48 }} />
      </ButtonBase>
    </Box>
  );
};
