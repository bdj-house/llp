import { Box, Button, Paper, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  display: 'grid',
  alignItems: 'stretch',
  gap: theme.spacing(4),
  gridTemplateColumns: '1fr',

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '7fr 5fr',
  },
}));

export const MainImagePaper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  height: '260px',
  overflow: 'hidden',
  cursor: 'pointer',

  [theme.breakpoints.up('md')]: {
    height: '420px',
  },

  '&:hover::after': {
    content: '"Clique para ver galeria"',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 500,
    zIndex: 1,
  },
}));

export const ThumbnailGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
  height: '100%',
  gridTemplateColumns: '1fr 1fr',

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const ThumbnailPaper = styled(Paper)({
  position: 'relative',
  height: '180px',
  overflow: 'hidden',
  cursor: 'pointer',

  '&:hover::after': {
    content: '"Ver imagem"',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 500,
    zIndex: 1,
  },
});

export const MoreImagesContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));

export const MoreImagesButton = styled(Button)({
  fontSize: '12px',
  textTransform: 'none',
  borderStyle: 'dashed',
});
