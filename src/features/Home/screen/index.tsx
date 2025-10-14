'use client';

import { Grid, useMediaQuery, useTheme } from '@mui/material';
import type { HomePage } from '@/sanity/types/schema';
import { ViewContainer } from '@/shared/components';
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
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ViewContainer>
      <Grid
        container
        sx={{
          height: { xs: 'auto', md: '100vh' },
          minHeight: { xs: '100vh', md: '100vh' },
        }}
        spacing={4}
      >
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-end' },
            py: { xs: 4, md: 0 },
          }}
        >
          <Info logoUrl={heroLogoUrl} title={heroTitle} subtitle={heroSubtitle} />
        </Grid>
        {!isMobile && (
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              py: { xs: 2, md: 0 },
            }}
          >
            <Art imageUrl={mainImageUrl} />
          </Grid>
        )}
      </Grid>
    </ViewContainer>
  );
};
