'use client';

import { OpacityCard, ViewContainer } from '@/shared/components';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Box, Container, Grid, IconButton, Paper, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { OperationArea } from '../types';

interface Props {
  operationAreas: OperationArea[];
}

const title = 'O que nós fazemos';
const subject = `Na Idalgo & Cortijo, priorizamos o seu sucesso e bem-estar. Questões
        jurídicas podem ser avassaladoras, por isso oferecemos uma abordagem
        personalizada para cada caso.`;
const subtitle = `Especializações`;

export const OperationAreaSection = ({ operationAreas }: Props) => {
  const theme = useTheme();

  const areas = useMemo(() => {
    const sortedAreas = operationAreas.sort((a, b) => a.order - b.order).slice(0, 7);

    if (sortedAreas.length <= 7) return sortedAreas;

    return sortedAreas.concat({
      _id: 'view-all',
      title: 'Ver Todos',
      category: 'TODOS',
      description: '',
      image: { asset: { _id: '', url: '' } },
      content: [],
      highlight: false,
      order: 999,
    });
  }, [operationAreas]);

  return (
    <ViewContainer header={{ title, subtitle, subject }}>
      <Container sx={{ height: '90vh', placeItems: 'center', py: 18 }}>
        <Grid container spacing={2} justifyContent="center">
          {areas.map((area, index) => (
            <Grid key={area._id} size={3}>
              <OpacityCard index={index}>
                <Paper
                  elevation={0}
                  sx={{
                    height: { xs: 200, sm: 220, md: 240 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    py: 2,
                    px: 3,
                    border: '1px solid',
                    borderColor: theme.palette.divider,
                    backgroundColor: area.highlight
                      ? theme.palette.background.default
                      : theme.palette.background.paper,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[2],
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                  onClick={() => {
                    if (area._id === 'view-all') {
                      // Navigate to areas-atuacao page
                      window.location.href = '/areas-atuacao';
                    }
                  }}
                >
                  <Box>
                    {area._id === 'view-all' ? (
                      <TravelExploreIcon fontSize="large" />
                    ) : (
                      <Typography variant="h4" fontWeight="bold" color="primary">
                        {area.category.charAt(0)}
                      </Typography>
                    )}
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    gap={1}
                  >
                    <Typography fontWeight={600}>{area.title}</Typography>
                    <IconButton size="small" disableRipple>
                      <ArrowOutwardIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Paper>
              </OpacityCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ViewContainer>
  );
};
