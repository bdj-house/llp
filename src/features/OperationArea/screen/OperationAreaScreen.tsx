'use client';

import tempLogo from '@/assets/logo/temp-logo.png';
import { urlFor } from '@/sanity/lib/image';
import { HelperPanel, OpacityCard, ViewContainer } from '@/shared/components';
import { EmojiPeople as EmojiPeopleIcon } from '@mui/icons-material';
import { Box, Chip, Container, Paper, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { DetailsContent } from '../components';
import { OperationArea } from '../types';

interface Props {
  operationAreas: OperationArea[];
  selectedAreaId?: string;
}

const title = 'Áreas de Atuação';
const subject = `Na Idalgo & Cortijo, priorizamos o seu sucesso e bem-estar. Questões
        jurídicas podem ser avassaladoras, por isso oferecemos uma abordagem
        personalizada para cada caso.`;
const subtitle = `Especializações`;

export const OperationAreaScreen = ({ operationAreas, selectedAreaId }: Props) => {
  const theme = useTheme();

  // Initialize with selectedAreaId to ensure consistent server/client rendering
  const [localSelectedId, setLocalSelectedId] = useState<string | null>(selectedAreaId || null);

  // Set default selection after component mounts if no area is selected
  useEffect(() => {
    if (!localSelectedId && operationAreas.length > 0) {
      setLocalSelectedId(operationAreas[0]._id);
    }
  }, [localSelectedId, operationAreas]);

  const headerAreas = useMemo(
    () => operationAreas.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).slice(0, 5),
    [operationAreas],
  );

  const selectedArea = useMemo(
    () => operationAreas.find(area => area._id === (localSelectedId || selectedAreaId)),
    [operationAreas, localSelectedId, selectedAreaId],
  );

  const handleAreaClick = (areaId: string) => {
    setLocalSelectedId(areaId);
  };

  return (
    <ViewContainer header={{ title, subtitle, subject }} isPageContainer>
      <Container
        sx={{
          py: 8,
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              overflowY: 'hidden',
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
            {headerAreas.map((area, index) => {
              const isSelected = area._id === (localSelectedId || selectedAreaId);
              return (
                <Box key={area._id} sx={{ minWidth: { xs: 140, md: 280 }, flexShrink: 0 }}>
                  <OpacityCard index={index}>
                    <Paper
                      elevation={0}
                      onClick={() => handleAreaClick(area._id)}
                      sx={{
                        height: isSelected ? { xs: 160, md: 320 } : { xs: 140, md: 280 },
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        borderColor: isSelected ? 'primary.main' : 'transparent',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: theme.shadows[8],
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', height: '100%' }}>
                        <Image
                          src={area.image ? urlFor(area.image?.asset).url() : tempLogo}
                          alt={area.title ?? ''}
                          fill
                          sizes="(max-width: 600px) 80vw, (max-width: 1200px) 40vw, 280px"
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
                            right: 16,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
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
                        </Box>
                      </Box>
                    </Paper>
                  </OpacityCard>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            minHeight: 400,
            transition: 'all 0.5s ease-in-out',
          }}
        >
          {selectedArea && (
            <>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" fontWeight="bold" color="primary" mb={2}>
                  {selectedArea.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {selectedArea.category}
                </Typography>
              </Box>
              <DetailsContent key={selectedArea._id} operationArea={selectedArea} />
            </>
          )}
        </Box>

        <HelperPanel
          title="Precisa de Ajuda Jurídica?"
          description="Nossa equipe está pronta para atender você com excelência e dedicação. Entre em contato e agende uma consulta personalizada."
          icon={<EmojiPeopleIcon fontSize="large" color="primary" />}
          buttonLabel="Agendar Consulta"
        />
      </Container>
    </ViewContainer>
  );
};
