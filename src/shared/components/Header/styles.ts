import {
  alpha,
  AppBar,
  Box,
  Button,
  ButtonBase,
  Drawer,
  IconButton,
  ListItemButton,
  styled,
  Typography,
} from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export const LogoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
});

export const LogoButton = styled(ButtonBase)({
  padding: '8px',
});

export const CompanyName = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  letterSpacing: 1,
  '&:hover': {
    color: theme.palette.background.default,
  },
  display: 'none',

  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

export const LocationButton = styled(ButtonBase)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid',
  borderRadius: '999px',
  borderColor: theme.palette.background.paper,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    borderColor: theme.palette.background.default,
    backgroundColor: alpha(theme.palette.background.default, 0.2),
  },
}));

export const NavLinkButton = styled(ButtonBase)({
  padding: '8px',
});

export const NavLinkText = styled(Typography, {
  shouldForwardProp: prop => prop !== 'isActive',
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  color: theme.palette.background.paper,
  fontWeight: isActive ? 600 : 500,
  letterSpacing: 0.75,
  fontSize: '1rem',

  '&:hover': {
    color: theme.palette.background.default,
  },
}));

export const ContactButton = styled(Button)({
  borderRadius: '999px',
  textTransform: 'none',
  fontWeight: 600,
});

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.background.paper,
}));

export const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: '300px',
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const MobileMenuHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const MobileCloseButton = styled(IconButton)({
  color: 'white',
});

export const MobileMenuItem = styled(ListItemButton, {
  shouldForwardProp: prop => prop !== 'isActive',
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  color: theme.palette.background.paper,
  fontWeight: isActive ? 600 : 400,

  '&:hover': {
    backgroundColor: alpha(theme.palette.background.paper, 0.1),
  },
}));

export const MobileMenuFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: 'auto',
}));

export const MobileLocationButton = styled(ButtonBase)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid',
  borderRadius: '999px',
  borderColor: theme.palette.background.paper,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  width: '100%',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    borderColor: theme.palette.background.default,
    backgroundColor: alpha(theme.palette.background.default, 0.2),
  },
}));
