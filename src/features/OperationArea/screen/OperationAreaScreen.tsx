'use client';

import tempLogo from '@/assets/logo/temp-logo.png';
import { OpacityCard, ViewContainer } from '@/shared/components';
import { Box, Button, Chip, Container, Paper, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { ContactCallToAction, DetailsContent } from '../components';
import { OperationArea } from '../types';

interface Props {
  operationAreas: OperationArea[];
}

const title = 'Áreas de Atuação';
const subject = `Na Idalgo & Cortijo, priorizamos o seu sucesso e bem-estar. Questões
        jurídicas podem ser avassaladoras, por isso oferecemos uma abordagem
        personalizada para cada caso.`;
const subtitle = `Especializações`;

export const OperationAreaScreen = ({ operationAreas }: Props) => {
  const theme = useTheme();

  const headerAreas = operationAreas.sort((a, b) => a.order - b.order).slice(0, 5);

  return (
    <ViewContainer header={{ title, subtitle, subject }}>
      <Container sx={{ py: 8 }}>
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              pb: 2,
              '&::-webkit-scrollbar': {
                height: 8,
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: theme.palette.grey[200],
                borderRadius: 4,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.primary.main,
                borderRadius: 4,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              },
            }}
          >
            {headerAreas.map((area, index) => (
              <Box
                key={area._id}
                sx={{
                  minWidth: 280,
                  flexShrink: 0,
                }}
              >
                <OpacityCard index={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: 280,
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', height: '100%' }}>
                      <Image
                        src={area.image?.asset.url ?? tempLogo}
                        alt={area.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                        }}
                      >
                        <Chip
                          label={area.category}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.9)',
                            fontWeight: 'bold',
                            fontSize: '0.7rem',
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          color: 'white',
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold" mb={1}>
                          {area.title}
                        </Typography>
                        {area.highlight && (
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              bgcolor: 'secondary.main',
                              color: 'white',
                              '&:hover': {
                                bgcolor: 'secondary.dark',
                              },
                            }}
                          >
                            SABER MAIS
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Paper>
                </OpacityCard>
              </Box>
            ))}
          </Box>
        </Box>

        <DetailsContent operationArea={operationAreas[0]} />

        <ContactCallToAction />
      </Container>
    </ViewContainer>
  );
};
