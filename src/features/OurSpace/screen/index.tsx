'use client';

import { ViewContainer } from '@/shared/components';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  header: { title?: string; subtitle?: string; subject?: string };
  gallery: string[];
  section: { title?: string; paragraphs: string[] };
  address?: string;
  hours?: string;
  contact?: { label?: string; url?: string };
}

export default function OurSpaceScreen({
  header,
  gallery,
  section,
  address,
  hours,
  contact,
}: Props) {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <ViewContainer
      header={{
        title: header?.title || 'Nosso Espaço',
        subtitle: header?.subtitle || 'Conheça o escritório',
        subject:
          header?.subject ||
          'Um ambiente pensado para oferecer conforto, privacidade e a melhor experiência durante o seu atendimento.',
      }}
      isPageContainer
    >
      <Container sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'grid',
            alignItems: 'stretch',
            gap: 4,
            gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
          }}
        >
          <Box>
            <Paper
              elevation={0}
              sx={{ position: 'relative', height: { xs: 260, md: 420 }, overflow: 'hidden' }}
            >
              {gallery?.[0] && (
                <Image
                  src={gallery[0]}
                  alt="Recepção do escritório"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}
            </Paper>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'grid',
                gap: 3,
                height: '100%',
                gridTemplateColumns: { xs: '1fr 1fr', md: '1fr' },
              }}
            >
              <Paper elevation={0} sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                {gallery?.[1] && (
                  <Image
                    src={gallery[1]}
                    alt="Sala de atendimento"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </Paper>
              <Paper elevation={0} sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                {gallery?.[2] && (
                  <Image
                    src={gallery[2]}
                    alt="Detalhes do ambiente"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </Paper>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
            mt: 6,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              color="primary"
              mb={2}
              fontWeight={600}
              gutterBottom
              fontSize={24}
            >
              {section?.title || 'Um espaço pensado para acolher você'}
            </Typography>
            {section?.paragraphs?.map((p, i) => (
              <Typography key={i} variant="body1" color="text.secondary" paragraph fontSize={18}>
                {p}
              </Typography>
            ))}
          </Box>

          <Box>
            <Paper elevation={0} sx={{ p: 3 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Endereço
              </Typography>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {address}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2 }}>
                Atendimento
              </Typography>
              <Typography variant="body1">{hours}</Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
                {contact?.url && (
                  <Button
                    variant="outlined"
                    color="primary"
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact?.label || 'Fale conosco'}
                  </Button>
                )}
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </ViewContainer>
  );
}
