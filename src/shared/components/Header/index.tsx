'use client';

import logo from '@/assets/logo/logo-32x32.png';
import { Routes } from '@/config/routes';
import { useHeader } from '@/shared/hooks';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import {
  alpha,
  AppBar,
  Box,
  Button,
  ButtonBase,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useMemo, useState } from 'react';
import { Map } from '../Map';
import { Position } from './Position';

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { mode } = useHeader();
  const theme = useTheme();

  const isMobile = useMemo(() => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), []);
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMap = useCallback(() => setIsMapOpen(true), []);
  const closeMap = useCallback(() => setIsMapOpen(false), []);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const routes = useMemo(
    () => [
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
    ],
    [],
  );

  const goToPage = useCallback(
    (route: string) => {
      router.push(route);
      closeMobileMenu();
    },
    [router, closeMobileMenu],
  );

  const goToHome = useCallback(() => {
    router.push(Routes.Home);
  }, [router]);

  const goToContact = useCallback(() => {
    const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_PHONE;
    const message = 'Olá, sou um visitante do site!';

    if (isMobile) {
      window.open(
        `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
        '_blank',
      );
      return;
    }

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }, [isMobile]);

  const isStatic = mode === 'static';

  if (mode === 'hidden') {
    return null;
  }

  const MobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={closeMobileMenu}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          maxWidth: 300,
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="white" fontWeight={600}>
          Menu
        </Typography>
        <IconButton onClick={closeMobileMenu} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {routes.map(item => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => goToPage(item.route)}
              sx={{
                color: theme.palette.background.paper,
                fontWeight: item.route === pathname ? 600 : 400,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.background.paper, 0.1),
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <ListItemButton
            onClick={goToContact}
            sx={{
              color: theme.palette.background.paper,
              '&:hover': {
                backgroundColor: alpha(theme.palette.background.paper, 0.1),
              },
            }}
          >
            <ListItemText primary="Contate-nos" />
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ p: 2, mt: 'auto' }}>
        <ButtonBase
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid',
            borderRadius: 999,
            borderColor: theme.palette.background.paper,
            px: 2,
            py: 1,
            width: '100%',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              borderColor: theme.palette.background.default,
              bgcolor: alpha(theme.palette.background.default, 0.2),
            },
          }}
          onClick={openMap}
          aria-label="Abrir mapa de localização"
        >
          <RoomOutlinedIcon fontSize="small" sx={{ color: theme.palette.background.paper }} />
          <Typography variant="body2" sx={{ mx: 1, color: theme.palette.background.paper }}>
            Dr Otavio Teixeira Mendes, 1947 - Sala 3 - Piracicaba
          </Typography>
          <KeyboardArrowDownIcon fontSize="small" sx={{ color: theme.palette.background.paper }} />
        </ButtonBase>
      </Box>
    </Drawer>
  );

  return (
    <>
      <Position isStatic={isStatic}>
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: theme.palette.primary.dark, px: { xs: 2, md: 4 } }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Stack direction="row" alignItems="center" spacing={2} gap={{ xs: 2, md: 6 }}>
              <ButtonBase onClick={goToHome} aria-label="Ir para a página inicial" sx={{ p: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    direction: 'row',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Image src={logo} alt="Logo" width={36} height={29} />

                  <Typography
                    variant="body1"
                    fontWeight={700}
                    color={theme.palette.background.paper}
                    sx={{
                      '&:hover': { color: theme.palette.background.default },
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    / Idalgo & Cortijo
                  </Typography>
                </Box>
              </ButtonBase>

              {!isMobileScreen && (
                <ButtonBase
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderRadius: 999,
                    borderColor: theme.palette.background.paper,
                    px: 2,
                    py: 1,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      borderColor: theme.palette.background.default,
                      bgcolor: alpha(theme.palette.background.default, 0.2),
                    },
                  }}
                  onClick={openMap}
                  aria-label="Abrir mapa de localização"
                >
                  <RoomOutlinedIcon
                    fontSize="small"
                    sx={{
                      color: theme.palette.background.paper,
                    }}
                  />
                  <Typography variant="body2" sx={{ mx: 1 }} color={theme.palette.background.paper}>
                    Dr Otavio Teixeira Mendes, 1947 - Sala 3 - Piracicaba
                  </Typography>
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    sx={{
                      color: theme.palette.background.paper,
                    }}
                  />
                </ButtonBase>
              )}
            </Stack>

            {isMobileScreen ? (
              <IconButton
                onClick={toggleMobileMenu}
                sx={{ color: theme.palette.background.paper }}
                aria-label="Abrir menu"
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Stack direction="row" alignItems="center" spacing={3}>
                {routes.map(item => (
                  <ButtonBase
                    onClick={() => goToPage(item.route)}
                    key={item.label}
                    aria-label={`Ir para ${item.label}`}
                    sx={{ p: 1 }}
                  >
                    <Typography
                      variant="body1"
                      color={theme.palette.background.paper}
                      fontWeight={item.route === pathname ? 600 : 400}
                      sx={{
                        '&:hover': { color: theme.palette.background.default },
                      }}
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
            )}
          </Toolbar>
        </AppBar>
      </Position>

      <MobileMenu />
      <Map isOpen={isMapOpen} close={closeMap} />
    </>
  );
};

export default Header;
