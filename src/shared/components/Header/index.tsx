'use client';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: 'transparent', px: 2 }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: 'black',
              borderRadius: '50%',
            }}
          />
          <Typography variant="body1" fontWeight={500}>
            / book@pro-designer.io
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid',
            borderRadius: 999,
            px: 2,
            py: 0.5,
          }}
        >
          <RoomOutlinedIcon fontSize="small" />
          <Typography variant="body2" sx={{ mx: 1 }}>
            W 630 S2 #130, Bountiful...
          </Typography>
          <KeyboardArrowDownIcon fontSize="small" />
        </Box>

        <Stack direction="row" alignItems="center" spacing={3}>
          <Typography variant="body2">Our Pricing</Typography>
          <Typography variant="body2">Services</Typography>
          <Typography variant="body2">Signup</Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: 999,
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            Hire Designer
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
