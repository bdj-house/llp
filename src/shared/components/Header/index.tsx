'use client';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import logo from '@/assets/logo/logo-32x32.png';
import { Routes } from '@/config/routes';
import { useHeader } from '@/shared/hooks';
import { Map } from '../Map';
import { Position } from './Position';

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { mode } = useHeader();
  const theme = useTheme();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const [isMapOpen, setIsMapOpen] = useState(false);

  const openMap = () => setIsMapOpen(true);
  const closeMap = () => setIsMapOpen(false);

  const routes = [
    {
      label: 'Publicações',
      route: Routes.Articles,
    },
    {
      label: 'Nosso Espaço',
      route: Routes.OurSpace,
    },
    {
      label: 'Áreas de atuação',
      route: Routes.OperationAreas,
    },
  ];

  const goToPage = (route: string) => {
    router.push(route);
  };

  const goToHome = () => {
    router.push(Routes.Home);
  };

  const goToContact = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_PHONE;
    const message = 'Olá, sou um visitante do site!';

    if (isMobile) {
      window.open(
        `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
          message,
        )}`,
        '_blank',
      );

      return;
    }

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
    );
  };

  const isStatic = mode === 'static';

  if (mode === 'hidden') {
    return null;
  }

  return (
    <>
      <Position isStatic={isStatic}>
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: theme.palette.primary.dark, px: 4 }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Stack direction="row" alignItems="center" spacing={2} gap={6}>
              <ButtonBase onClick={goToHome}>
                <Box
                  sx={{
                    display: 'flex',
                    direction: 'row',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Image src={logo} alt="Logo" width={36} height={36} />
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    color={theme.palette.background.paper}
                  >
                    / Idalgo & Cortijo
                  </Typography>
                </Box>
              </ButtonBase>

              <ButtonBase
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid',
                  borderRadius: 999,
                  borderColor: theme.palette.background.paper,
                  px: 2,
                  py: 0.5,
                }}
                onClick={openMap}
              >
                <RoomOutlinedIcon
                  fontSize="small"
                  sx={{
                    color: theme.palette.background.paper,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ mx: 1 }}
                  color={theme.palette.background.paper}
                >
                  Dr Otavio Teixera Mendes, 1947 - Sala 3 - Piracicaba
                </Typography>
                <KeyboardArrowDownIcon
                  fontSize="small"
                  sx={{
                    color: theme.palette.background.paper,
                  }}
                />
              </ButtonBase>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={3}>
              {routes.map(item => (
                <ButtonBase
                  onClick={() => goToPage(item.route)}
                  key={item.label}
                >
                  <Typography
                    variant="body1"
                    color={theme.palette.background.paper}
                    fontWeight={item.route === pathname ? 600 : 400}
                  >
                    {item.label}
                  </Typography>
                </ButtonBase>
              ))}

              <Button
                variant="contained"
                sx={{
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 500,
                }}
                onClick={goToContact}
              >
                Contate-nos
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Position>

      <Map isOpen={isMapOpen} close={closeMap} />
    </>
  );
};

export default Header;
