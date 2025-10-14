import { Box, Dialog, DialogContent, IconButton, styled, Typography } from '@mui/material';

export const LightboxDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    maxWidth: '90vw',
    maxHeight: '90vh',
    margin: 2,
  },
});

export const Content = styled(DialogContent)({
  position: 'relative',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '70vh',
});

export const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: 16,
  right: 16,
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 2,
});

export const ArrowLeftButton = styled(IconButton)({
  position: 'absolute',
  left: 16,
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 2,
});

export const ArrowRightButton = styled(IconButton)({
  position: 'absolute',
  right: 16,
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 2,
});

export const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '70vh',
  maxWidth: '80vw',
});

export const CounterBadge = styled(Typography)({
  position: 'absolute',
  bottom: 16,
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '8px 16px',
  borderRadius: 1,
  zIndex: 2,
});
