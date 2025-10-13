'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Box, Container, Grid, IconButton, Link, Paper, Typography, useTheme } from '@mui/material';
import { OperationArea } from '@/sanity/types/schema';
import { If, OpacityCard, ViewContainer } from '@/shared/components';

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
    const sortedAreas = operationAreas.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).slice(0, 7);

    if (sortedAreas.length <= 7) return sortedAreas;

    return sortedAreas.concat([
      {
        _id: 'view-all',
        title: 'Ver Todos',
        category: 'TODOS',
        image: undefined,
        content: [],
        order: 999,
        _type: 'operationArea',
        _createdAt: '',
        _rev: '',
        _updatedAt: '',
      },
    ]);
  }, [operationAreas]);

  return (
    <ViewContainer header={{ title, subtitle, subject }}>
      <Container sx={{ height: '90vh', py: 18 }}>
        <Grid container spacing={2} justifyContent="center">
          {areas.map((area, index) => {
            const backgroundColor =
              index === 0 ? theme.palette.secondary.main : theme.palette.action.hover;
            const hoverBackgroundColor =
              index === 0 ? theme.palette.secondary.light : theme.palette.action.hover;

            return (
              <Grid key={area._id} size={{ xs: 12, md: 3 }}>
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
                        border: '1px solid',
                        borderColor: theme.palette.divider,
                        backgroundColor: backgroundColor,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: theme.shadows[2],
                          backgroundColor: hoverBackgroundColor,
                        },
                      }}
                    >
                      <Box>
                        <If
                          condition={area._id !== 'view-all'}
                          elseRender={<TravelExploreIcon fontSize="large" />}
                        >
                          <Typography variant="h4" fontWeight="bold" color="primary">
                            {area.category?.charAt(0)}
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
                        <IconButton size="small" disableRipple aria-label="Ver detalhes da área">
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
