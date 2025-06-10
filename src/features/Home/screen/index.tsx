'use client';

import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import testImage from '@/assets/images/test-2.jpg';
import tempLogo from '@/assets/logo/temp-logo.png';
import { ViewContainer } from '@/shared/components';

export const HomeScreen: React.FC = () => {
  return (
    <ViewContainer>
      <Grid container>
        <Grid size={6} sx={{ my: 'auto', px: 12 }}>
          <Box mt={-10}>
            <Image
              src={tempLogo}
              alt="Logo"
              width={420}
              height={260}
            />
          </Box>

          <Box>
            <Typography variant="h2" color="secondary">Excelência em cada detalhe</Typography>

            <Typography variant="h5" color="textSecondary" mt={1}>
              Conheça um escritório pensado para inspirar confiança
              <br />
              conforto e resultados de alto nível.
            </Typography>
          </Box>

          <ButtonBase
            onClick={() => {
              const section = document.getElementById('nosso-espaco');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              mt: 4,
            }}
          >
            <Typography variant="button" color="info">Conheça nosso espaço</Typography>
          </ButtonBase>

        </Grid>

        <Grid size={6}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100vh',
              aspectRatio: '1 / 1',
              mx: 'auto',
            }}
          >
            <Image
              src={testImage}
              alt="Logo"
              fill
            />
          </Box>
        </Grid>

      </Grid>

    </ViewContainer>
  );
};
