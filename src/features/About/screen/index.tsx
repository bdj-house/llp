'use client';

import Woman1 from '@/assets/images/woman-1.jpg';
import Woman2 from '@/assets/images/woman-2.jpg';
import { OpacityCard, ViewContainer } from '@/shared/components';
import {
  Close as CloseIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useMemo, useState } from 'react';

const associates = [
  {
    name: 'Dra. Kátia Idalgo',
    role: 'Advogada Sócia',
    history: `Kátia começou sua trajetória jurídica em escritórios de médio porte, 
      onde atuou em casos complexos de Direito Civil, especialmente relacionados a 
      sucessões e disputas patrimoniais. Ao longo dos anos, consolidou sua 
      reputação pela capacidade de unir técnica e sensibilidade no trato com as 
      famílias, orientando clientes em momentos decisivos e delicados. Participou 
      de cursos de especialização em resolução de conflitos e mediação familiar, 
      o que lhe proporcionou uma abordagem mais humanizada e estratégica. Sua 
      experiência como sócia do escritório reflete não apenas conhecimento técnico, 
      mas também liderança na construção de uma advocacia próxima e transparente.`,
    description: `Especialista em Direito Civil e Família, com mais de 10 anos de 
      experiência em soluções jurídicas personalizadas e atendimento humanizado.`,
    graduation: 'Graduada em Direito pela Universidade de São Paulo',
    imageCover: Woman1,
    imageProfile: Woman1,
    email: 'katia@gmail.com',
    linkedin: 'https://linkedin.com/in/katia-idalgo',
    whatsapp: 'https://wa.me/5519999999999',
    reverse: false,
  },
  {
    name: 'Dra. Mariana Cortijo',
    role: 'Advogada Sócia',
    history: `Mariana iniciou sua carreira assessorando sindicatos e empresas em 
      processos trabalhistas, o que lhe garantiu experiência prática em negociações 
      coletivas e disputas de grande impacto. Posteriormente, ampliou sua atuação 
      para o Direito Previdenciário, acompanhando centenas de clientes em busca de 
      benefícios e revisões, sempre com ênfase em clareza e orientação didática. 
      Além da prática de litígios, tem se dedicado a consultorias preventivas, 
      ajudando empresas e trabalhadores a compreenderem seus direitos e deveres. 
      Sua atuação como sócia representa o compromisso com a justiça social e com 
      a acessibilidade da informação jurídica para todos os públicos.
      
      Mariana iniciou sua carreira assessorando sindicatos e empresas em 
      processos trabalhistas, o que lhe garantiu experiência prática em negociações 
      coletivas e disputas de grande impacto. Posteriormente, ampliou sua atuação 
      para o Direito Previdenciário, acompanhando centenas de clientes em busca de 
      benefícios e revisões, sempre com ênfase em clareza e orientação didática. 
      Além da prática de litígios, tem se dedicado a consultorias preventivas, 
      ajudando empresas e trabalhadores a compreenderem seus direitos e deveres. 
      Sua atuação como sócia representa o compromisso com a justiça social e com 
      a acessibilidade da informação jurídica para todos os públicos.
      
      Mariana iniciou sua carreira assessorando sindicatos e empresas em 
      processos trabalhistas, o que lhe garantiu experiência prática em negociações 
      coletivas e disputas de grande impacto. Posteriormente, ampliou sua atuação 
      para o Direito Previdenciário, acompanhando centenas de clientes em busca de 
      benefícios e revisões, sempre com ênfase em clareza e orientação didática. 
      Além da prática de litígios, tem se dedicado a consultorias preventivas, 
      ajudando empresas e trabalhadores a compreenderem seus direitos e deveres. 
      Sua atuação como sócia representa o compromisso com a justiça social e com 
      a acessibilidade da informação jurídica para todos os públicos.
      
      Mariana iniciou sua carreira assessorando sindicatos e empresas em 
      processos trabalhistas, o que lhe garantiu experiência prática em negociações 
      coletivas e disputas de grande impacto. Posteriormente, ampliou sua atuação 
      para o Direito Previdenciário, acompanhando centenas de clientes em busca de 
      benefícios e revisões, sempre com ênfase em clareza e orientação didática. 
      Além da prática de litígios, tem se dedicado a consultorias preventivas, 
      ajudando empresas e trabalhadores a compreenderem seus direitos e deveres. 
      Sua atuação como sócia representa o compromisso com a justiça social e com 
      a acessibilidade da informação jurídica para todos os públicos.
      
      Mariana iniciou sua carreira assessorando sindicatos e empresas em 
      processos trabalhistas, o que lhe garantiu experiência prática em negociações 
      coletivas e disputas de grande impacto. Posteriormente, ampliou sua atuação 
      para o Direito Previdenciário, acompanhando centenas de clientes em busca de 
      benefícios e revisões, sempre com ênfase em clareza e orientação didática. 
      Além da prática de litígios, tem se dedicado a consultorias preventivas, 
      ajudando empresas e trabalhadores a compreenderem seus direitos e deveres. 
      Sua atuação como sócia representa o compromisso com a justiça social e com 
      a acessibilidade da informação jurídica para todos os públicos.
      
      `,
    description: `Atua com foco em Direito Trabalhista e Previdenciário, 
      promovendo justiça e orientação clara para seus clientes.`,
    graduation: 'Graduada em Direito pela Universidade de São Paulo',
    imageCover: Woman2,
    imageProfile: Woman2,
    email: 'mariana@gmail.com',
    linkedin: 'https://linkedin.com/in/mariana-cortijo',
    whatsapp: 'https://wa.me/5519999999999',
    reverse: true,
  },
];

export const AboutScreen = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectedAssociate = useMemo(() => associates[selectedIndex], [selectedIndex]);

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
        {associates.map(({ name, role, description, imageCover, reverse }, index) => (
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
                  src={imageCover.src}
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
                  onClick={() => handleOpen(index)}
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

        <Dialog
          key={selectedIndex}
          open={open}
          onClose={handleClose}
          fullScreen
          slotProps={{
            paper: {
              sx: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                bgcolor: 'transparent',
                position: 'relative',
              },
            },
          }}
        >
          <Box sx={{ position: 'absolute', top: '3vh', right: 0, zIndex: 1 }}>
            <IconButton sx={{ color: theme.palette.background.default }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            display="flex"
            gap={3}
            height="90vh"
            mt={10}
            sx={{
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box position="relative" flex={1}>
              <Image src={selectedAssociate?.imageProfile.src} alt={selectedAssociate?.name} fill />
            </Box>

            <Box sx={{ padding: 4, flex: 1, overflowY: 'auto' }}>
              <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
                {selectedAssociate?.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="secondary"
                fontSize={18}
                fontWeight={700}
                gutterBottom
              >
                {selectedAssociate?.role}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={2}>
                {selectedAssociate?.graduation}
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Box width="70%">
                <Typography variant="body1" fontSize={20} mt={2} color="text.secondary">
                  {selectedAssociate?.history}
                </Typography>
              </Box>

              <Box display="flex" gap={2} mt={3} justifyContent="flex-end">
                <IconButton
                  component="a"
                  href={`mailto:${selectedAssociate?.email}`}
                  sx={{ '&:hover': { color: theme.palette.primary.main } }}
                >
                  <EmailIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href={selectedAssociate?.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ '&:hover': { color: theme.palette.primary.main } }}
                >
                  <WhatsAppIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href={selectedAssociate?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ '&:hover': { color: theme.palette.primary.main } }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </ViewContainer>
  );
};
