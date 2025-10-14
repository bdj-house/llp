import { createTheme } from '@mui/material/styles';
import { champagneFont, mangolaineFont } from './fonts';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#6B1A2B',
      contrastText: '#F2DDD5',
    },
    secondary: {
      main: '#B85B3A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F2DDD5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#38403B',
      secondary: '#6B1A2B',
    },
  },
  typography: {
    fontFamily: `${champagneFont.style.fontFamily}, sans-serif`,
    h1: {
      fontFamily: `${mangolaineFont.style.fontFamily}, serif`,
      fontWeight: 400,
      fontSize: '3rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontFamily: `${mangolaineFont.style.fontFamily}, serif`,
      fontWeight: 400,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontFamily: `${mangolaineFont.style.fontFamily}, serif`,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
      },
    },
    h6: {
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body1: {
      fontSize: '1.125rem',
      letterSpacing: 1.25,
    },
    body2: {
      fontSize: '1rem',
    },
    caption: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none',
      fontFamily: `${champagneFont.style.fontFamily}, sans-serif`,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
