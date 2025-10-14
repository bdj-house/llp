'use client';

import { useCallback, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { List, ListItem, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import { Routes } from '@/config/routes';
import { useHeader } from '@/shared/hooks';
import { Position } from './Position';
import {
  CompanyName,
  ContactButton,
  LocationButton,
  LogoButton,
  LogoContainer,
  MobileCloseButton,
  MobileDrawer,
  MobileLocationButton,
  MobileMenuButton,
  MobileMenuFooter,
  MobileMenuHeader,
  MobileMenuItem,
  NavLinkButton,
  NavLinkText,
  StyledAppBar,
} from './styles';
import logo from '@/assets/logo/logo-32x32.png';

const Map = dynamic(() => import('../Map').then(mod => ({ default: mod.Map })), {
  ssr: false,
});

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { mode } = useHeader();

  const isStudioRoute = pathname?.startsWith('/studio');

  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }, []);

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMap = useCallback(() => setIsMapOpen(true), []);
  const closeMap = useCallback(() => setIsMapOpen(false), []);
  const toggleMobileMenu = useCallback(() => setMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const routes = useMemo(
    () => [
      { label: 'Publicações', route: Routes.Articles },
      { label: 'Nosso Espaço', route: Routes.OurSpace },
      { label: 'Áreas de atuação', route: Routes.OperationAreas },
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

  if (isStudioRoute || mode === 'hidden') {
    return null;
  }

  const MobileMenu = () => (
    <MobileDrawer anchor="right" open={mobileMenuOpen} onClose={closeMobileMenu}>
      <MobileMenuHeader>
        <Typography variant="h6" color="white" fontWeight={600}>
          Menu
        </Typography>
        <MobileCloseButton onClick={closeMobileMenu}>
          <CloseIcon />
        </MobileCloseButton>
      </MobileMenuHeader>

      <List>
        {routes.map(item => (
          <ListItem key={item.label} disablePadding>
            <MobileMenuItem onClick={() => goToPage(item.route)} isActive={item.route === pathname}>
              <ListItemText primary={item.label} />
            </MobileMenuItem>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <MobileMenuItem onClick={goToContact}>
            <ListItemText primary="Contate-nos" />
          </MobileMenuItem>
        </ListItem>
      </List>

      <MobileMenuFooter>
        <MobileLocationButton onClick={openMap} aria-label="Abrir mapa de localização">
          <RoomOutlinedIcon fontSize="small" sx={{ color: 'background.paper' }} />
          <Typography variant="body2" sx={{ mx: 1, color: 'background.paper' }}>
            Dr Otavio Teixeira Mendes, 1947 - Sala 3 - Piracicaba
          </Typography>
          <KeyboardArrowDownIcon fontSize="small" sx={{ color: 'background.paper' }} />
        </MobileLocationButton>
      </MobileMenuFooter>
    </MobileDrawer>
  );

  return (
    <>
      <Position isStatic={isStatic}>
        <StyledAppBar position="static" elevation={0}>
          <Toolbar
            sx={{ justifyContent: 'space-between' }}
            component="nav"
            aria-label="Navegação principal"
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              gap={{ xs: 2, md: 6 }}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <LogoButton onClick={goToHome} aria-label="Ir para a página inicial">
                <LogoContainer>
                  <Image src={logo} alt="Logo" width={36} height={29} />
                  <CompanyName variant="body1" fontWeight={700} color="background.paper">
                    / Idalgo & Cortijo
                  </CompanyName>
                </LogoContainer>
              </LogoButton>

              <LocationButton onClick={openMap} aria-label="Abrir mapa de localização">
                <RoomOutlinedIcon fontSize="small" sx={{ color: 'background.paper' }} />
                <Typography variant="body2" sx={{ mx: 1 }} color="background.paper">
                  Dr Otavio Teixeira Mendes, 1947 - Sala 3 - Piracicaba
                </Typography>
                <KeyboardArrowDownIcon fontSize="small" sx={{ color: 'background.paper' }} />
              </LocationButton>
            </Stack>

            <Stack direction="row" alignItems="center" sx={{ display: { xs: 'flex', md: 'none' } }}>
              <LogoButton onClick={goToHome} aria-label="Ir para a página inicial">
                <LogoContainer>
                  <Image src={logo} alt="Logo" width={36} height={29} />
                  <CompanyName variant="body1" fontWeight={700} color="background.paper">
                    / Idalgo & Cortijo
                  </CompanyName>
                </LogoContainer>
              </LogoButton>
            </Stack>

            {/* Right side - Navigation (Mobile vs Desktop) */}
            <Stack direction="row" alignItems="center" sx={{ display: { xs: 'flex', md: 'none' } }}>
              <MobileMenuButton onClick={toggleMobileMenu} aria-label="Abrir menu">
                <MenuIcon />
              </MobileMenuButton>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {routes.map(item => (
                <NavLinkButton
                  onClick={() => goToPage(item.route)}
                  onMouseEnter={() => router.prefetch(item.route)}
                  key={item.label}
                  aria-label={`Ir para ${item.label}`}
                >
                  <NavLinkText variant="body1" isActive={item.route === pathname}>
                    {item.label}
                  </NavLinkText>
                </NavLinkButton>
              ))}

              <ContactButton variant="contained" onClick={goToContact}>
                Contate-nos
              </ContactButton>
            </Stack>
          </Toolbar>
        </StyledAppBar>
      </Position>

      <MobileMenu />
      <Map isOpen={isMapOpen} close={closeMap} />
    </>
  );
};

export default Header;
