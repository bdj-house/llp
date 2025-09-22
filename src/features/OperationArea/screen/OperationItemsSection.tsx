'use client';

import { If, OpacityCard, ViewContainer } from '@/shared/components';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Box, Container, Grid, IconButton, Link, Paper, Typography, useTheme } from '@mui/material';
import { useSearchParams } from 'next/navigation';
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

export const OperationItemsSection = ({ operationAreas }: Props) => {
  const theme = useTheme();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get('selected');

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
          {areas.map((area, index) => {
            const isSelected = area._id === selectedId;
            return (
              <Grid key={area._id} size={3}>
                <Link href={`/areas-atuacao/${area._id}`} sx={{ textDecoration: 'none' }}>
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
                        border: isSelected ? '3px solid' : '1px solid',
                        borderColor: isSelected ? 'primary.main' : theme.palette.divider,
                        backgroundColor: isSelected
                          ? theme.palette.primary.light
                          : area.highlight
                          ? theme.palette.background.default
                          : theme.palette.background.paper,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: theme.shadows[2],
                          backgroundColor: isSelected
                            ? theme.palette.primary.light
                            : theme.palette.action.hover,
                        },
                      }}
                    >
                      <Box>
                        <If
                          condition={area._id !== 'view-all'}
                          elseRender={<TravelExploreIcon fontSize="large" />}
                        >
                          <Typography variant="h4" fontWeight="bold" color="primary">
                            {area.category.charAt(0)}
                          </Typography>
                        </If>
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
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ViewContainer>
  );
};
