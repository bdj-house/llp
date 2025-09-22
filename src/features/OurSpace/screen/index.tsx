'use client';

import { ViewContainer } from '@/shared/components';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface Props {
  images: {
    main5: StaticImageData;
    main6: StaticImageData;
    test2: StaticImageData;
    woman1: StaticImageData;
  };
}

export default function OurSpaceScreen({ images }: Props) {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <ViewContainer
      header={{
        title: 'Nosso Espaço',
        subtitle: 'Conheça o escritório',
        subject:
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
              <Image
                src={images.main5}
                alt="Recepção do escritório"
                fill
                style={{ objectFit: 'cover' }}
              />
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
                <Image
                  src={images.main6}
                  alt="Sala de atendimento"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Paper>
              <Paper elevation={0} sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                <Image
                  src={images.test2}
                  alt="Detalhes do ambiente"
                  fill
                  style={{ objectFit: 'cover' }}
                />
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
              Um espaço pensado para acolher você
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph fontSize={18}>
              Nosso escritório foi cuidadosamente projetado para oferecer conforto, segurança e
              privacidade. Cada detalhe foi pensado para proporcionar uma experiência acolhedora,
              com ambientes modernos e funcionais, ideais para conversas claras e objetivas.
            </Typography>
            <Typography variant="body1" color="text.secondary" fontSize={18}>
              Estamos prontos para recebê-lo com atenção e profissionalismo, proporcionando
              tranquilidade em cada etapa do seu atendimento.
            </Typography>
          </Box>

          <Box>
            <Paper elevation={0} sx={{ p: 3 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Endereço
              </Typography>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                R. Dr. Otávio Teixeira Mendes, 1947 – Alto, Piracicaba – SP
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2 }}>
                Atendimento
              </Typography>
              <Typography variant="body1">Segunda a Sexta, 9h às 18h</Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://wa.me/5519999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale conosco
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </ViewContainer>
  );
}
