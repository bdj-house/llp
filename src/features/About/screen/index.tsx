'use client';

import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import Woman1 from '@/assets/images/woman-1.jpg';
import Woman2 from '@/assets/images/woman-2.jpg';
import { OpacityCard, ViewContainer } from '@/shared/components';

const associates = [
  {
    name: 'Dra. Kátia Idalgo',
    role: 'Advogada Sócia',
    description: `Especialista em Direito Civil e Família, com mais de 10 anos de 
      experiência em soluções jurídicas personalizadas e atendimento humanizado.`,
    imageUrl: Woman1,
    reverse: false,
  },
  {
    name: 'Dra. Mariana Cortijo',
    role: 'Advogada Sócia',
    description: `Atua com foco em Direito Trabalhista e Previdenciário, 
      promovendo justiça e orientação clara para seus clientes.`,
    imageUrl: Woman2,
    reverse: true,
  },
];

export const AboutScreen = () => {
  return (
    <ViewContainer
      header={{
        title: 'Quem somos',
        subtitle: 'Equipe',
        subject: 'Conheça nossas especialistas',
      }}
      customBg
      id="our-team"
    >
      <Box display="flex" flexDirection="column">
        {associates.map(({ name, role, description, imageUrl, reverse }, index) => (
          <OpacityCard key={name} index={index}>
            <Grid
              container
              spacing={3}
              direction={{
                xs: 'column',
                md: reverse ? 'row-reverse' : 'row',
              }}
              alignItems="center"
              py={6}
              px={36}
            >
              <Grid size={3}>
                <Avatar
                  alt={name}
                  src={imageUrl.src}
                  sx={{
                    width: 240,
                    height: 240,
                    mx: 'auto',
                    boxShadow: 3,
                  }}
                />
              </Grid>

              <Grid size={3}>
                <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="subtitle2" gutterBottom color="secondary" fontWeight={600}>
                  {role}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={2}>
                  {description}
                </Typography>
                <Button
                  variant="text"
                  disableRipple
                  sx={{
                    pl: 0,
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      height: '2px',
                      bottom: -5,
                      left: -10,
                      backgroundColor: 'primary.main',
                      width: 0,
                      transition: 'width 0.4s ease',
                    },
                    '&:hover:after': {
                      width: '35%',
                    },
                  }}
                >
                  <Typography fontWeight="bold">Saiba mais →</Typography>
                </Button>
              </Grid>
            </Grid>
          </OpacityCard>
        ))}
      </Box>
    </ViewContainer>
  );
};
