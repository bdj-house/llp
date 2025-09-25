'use client';

import type { HomePage } from '@/sanity/types/schema';
import { ViewContainer } from '@/shared/components';
import { Grid } from '@mui/material';
import { Art, Info } from '../components';

type HomeProps = Pick<HomePage, 'heroTitle' | 'heroSubtitle'> & {
  heroLogoUrl?: string;
  mainImageUrl?: string;
};

export const HomeScreen: React.FC<HomeProps> = ({
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
