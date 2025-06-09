import { createTheme } from '@mui/material/styles';
import { champagneFont, mangolaineFont } from './fonts';

const theme = createTheme({
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
    },
    h2: {
      fontFamily: `${mangolaineFont.style.fontFamily}, serif`,
      fontWeight: 400,
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: `${mangolaineFont.style.fontFamily}, serif`,
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
