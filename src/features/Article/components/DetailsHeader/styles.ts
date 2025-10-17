import { alpha, Box, Chip, styled } from '@mui/material';

export const HEADER_HEIGHT = 600;

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  height: 'auto',
  maxWidth: '1200px',
  margin: '0 auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  gap: theme.spacing(6),
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(4),

  [theme.breakpoints.up('md')]: {
    height: `${HEADER_HEIGHT}px`,
    flexDirection: 'row',
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  height: '300px',
  width: '100%',
  position: 'relative',
  borderRadius: theme.spacing(4),
  overflow: 'hidden',
  boxShadow: theme.shadows[3],

  '&:hover': {
    transform: 'scale(1.02)',
    transition: 'all 0.3s ease-in-out',
  },

  [theme.breakpoints.up('md')]: {
    height: '100%',
    width: '50%',
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    width: '50%',
    marginTop: '10%',
  },
}));

export const TagChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  backgroundColor: alpha(theme.palette.primary.main, 0.9),
  color: theme.palette.background.paper,
  fontWeight: 700,
}));
