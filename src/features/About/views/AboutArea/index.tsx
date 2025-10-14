'use client';

import { useMemo, useState } from 'react';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { OpacityCard, ViewContainer } from '@/shared/components';
import { AssociateAvatar, LearnMoreButton } from './styles';
import { DetailsAssociate } from '../../components/DetailsAssociate';
import { AboutScreenProps } from '../../types';

export const AboutArea: React.FC<AboutScreenProps> = ({ associates, sectionInfo }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectedAssociate = useMemo(() => associates[selectedIndex], [selectedIndex, associates]);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSelectedIndex(0);
    }, 300);
  };

  return (
    <ViewContainer header={{ ...sectionInfo }} customBg id="our-team">
      {associates?.map(({ name, role, description, imageCover }, index) => (
        <OpacityCard key={`${name}-${index}`} index={index}>
          <Grid
            container
            spacing={3}
            direction={{
              xs: 'column',
              md: index % 2 !== 0 ? 'row-reverse' : 'row',
            }}
            alignItems="center"
            py={6}
            px={isMobile ? 2 : 36}
          >
            <Grid size={{ xs: 12, md: 3 }}>
              <AssociateAvatar alt={name} src={imageCover} />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                {name}
              </Typography>
              <Typography variant="subtitle2" gutterBottom color="secondary" fontWeight={600}>
                {role}
              </Typography>

              <Typography variant="body1" color="text.secondary" mb={2}>
                {description}
              </Typography>

              <LearnMoreButton variant="text" disableRipple onClick={() => handleOpen(index)}>
                <Typography fontWeight="bold">Saiba mais →</Typography>
              </LearnMoreButton>
            </Grid>
          </Grid>
        </OpacityCard>
      ))}

      <DetailsAssociate open={open} onClose={handleClose} selectedAssociate={selectedAssociate} />
    </ViewContainer>
  );
};
