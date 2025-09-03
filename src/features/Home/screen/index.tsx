'use client';

import { Grid } from '@mui/material';
import { ViewContainer } from '@/shared/components';
import { Art, Info } from '../components';

export const HomeScreen: React.FC = () => {
  return (
    <ViewContainer>
      <Grid container sx={{ height: '100vh' }} spacing={4}>
        <Grid
          size={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Info />
        </Grid>
        <Grid
          size={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Art />
        </Grid>
      </Grid>
    </ViewContainer>
  );
};
