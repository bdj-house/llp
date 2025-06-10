'use client';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { AppBar, Box, Button, ButtonBase, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/logo/logo-32x32.png';
import { useScrollDirection } from '@/shared/hooks';
import { Map } from '../Map';

const Header: React.FC = () => {
  const theme = useTheme();
  const scrollDirection = useScrollDirection();

  const [isMapOpen, setIsMapOpen] = useState(false);

  const openMap = () => setIsMapOpen(true);
  const closeMap = () => setIsMapOpen(false);

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: theme.palette.primary.dark, px: 4 }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Stack direction="row" alignItems="center" spacing={2} gap={6}>
              <Box sx={{ display: 'flex', direction: 'row', alignItems: 'center', gap: 1 }}>
                <Image
                  src={logo}
                  alt="Logo"
                  width={36}
                  height={36}
                  style={{ objectFit: 'contain' }}
                />
                <Typography variant="body1" fontWeight={500}>
                  / Idalgo & Cortijo
                </Typography>
              </Box>

              <ButtonBase
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid',
                  borderRadius: 999,
                  px: 2,
                  py: 0.5,
                }}
                onClick={openMap}
              >
                <RoomOutlinedIcon fontSize="small" />
                <Typography variant="body2" sx={{ mx: 1 }}>
                  Dr Otavio Teixera Mendes, 1947 - Sala 3 - Piracicaba
                </Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </ButtonBase>

            </Stack>

            <Stack direction="row" alignItems="center" spacing={3}>
              <Typography variant="body2">Áreas de Atuação</Typography>
              <Typography variant="body2">Nossa Equipe</Typography>
              <Typography variant="body2">Publicações</Typography>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Contate-nos
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </motion.div>

      <Toolbar sx={{ height: 64, background: theme.palette.primary.dark }} />

      <Map isOpen={isMapOpen} close={closeMap} />
    </>

  );
};

export default Header;
