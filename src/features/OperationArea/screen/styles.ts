import { Box, Chip, Container, Paper, styled } from '@mui/material';

export const MainContainer = styled(Container)(({ theme }) => ({
  paddingBottom: theme.spacing(8),
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const HeaderAreasWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const ScrollableContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  overflowX: 'auto',
  overflowY: 'hidden',
  paddingBottom: theme.spacing(2),

  '&::-webkit-scrollbar': {
    height: '8px',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.grey[200],
    borderRadius: '4px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px',

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export const AreaCardWrapper = styled(Box)(({ theme }) => ({
  minWidth: '140px',
  flexShrink: 0,

  [theme.breakpoints.up('md')]: {
    minWidth: '280px',
  },
}));

export const AreaCardPaper = styled(Paper, {
  shouldForwardProp: prop => prop !== 'isSelected',
})<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  height: isSelected ? '160px' : '140px',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  borderColor: isSelected ? theme.palette.primary.main : 'transparent',

  [theme.breakpoints.up('md')]: {
    height: isSelected ? '320px' : '280px',
  },

  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

export const ImageContainer = styled(Box)({
  position: 'relative',
  height: '100%',
});

export const ImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)',
});

export const CategoryContainer = styled(Box)({
  position: 'absolute',
  top: '16px',
  left: '16px',
  right: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const CategoryChip = styled(Chip)({
  backgroundColor: 'rgba(255,255,255,0.9)',
  fontWeight: 'bold',
  fontSize: '0.7rem',
});

export const TitleContainer = styled(Box)({
  position: 'absolute',
  bottom: '16px',
  left: '16px',
  color: 'white',
});

export const ContentAreaContainer = styled(Box)({
  minHeight: '400px',
  transition: 'all 0.5s ease-in-out',
});

export const TitleSection = styled(Box)({
  textAlign: 'center',
});
