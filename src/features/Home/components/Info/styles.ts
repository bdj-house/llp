import { Box, styled, Typography } from '@mui/material';

export const InfoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  textAlign: 'center',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  [theme.breakpoints.up('lg')]: {
    width: '80%',
    textAlign: 'left',
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export const LogoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 0,
  alignItems: 'center',
  width: '100%',
  maxWidth: '480px',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%',
  },

  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(4),
    alignItems: 'flex-start',
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginTop: theme.spacing(2),

  [theme.breakpoints.up('lg')]: {
    fontSize: '1.75rem',
    marginTop: 0,
  },
}));

export const SubtitleText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  marginTop: theme.spacing(2),

  [theme.breakpoints.up('lg')]: {
    fontSize: '1.25rem',
  },
}));

export const ScrollButtonContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 6,
  bottom: 36,
}));
