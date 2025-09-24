'use client';

import { ViewContainer } from '@/shared/components';
import { Grid } from '@mui/material';
import { Art, Info } from '../components';

interface Props {
  heroLogoUrl?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  mainImageUrl?: string;
}

export const HomeScreen: React.FC<Props> = ({
  heroLogoUrl,
  heroTitle,
  heroSubtitle,
  mainImageUrl,
}) => {
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
          <Info logoUrl={heroLogoUrl} title={heroTitle} subtitle={heroSubtitle} />
        </Grid>
        <Grid size={7} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Art imageUrl={mainImageUrl} />
        </Grid>
      </Grid>
    </ViewContainer>
  );
};
