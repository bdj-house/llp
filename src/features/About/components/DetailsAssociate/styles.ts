import { Box, Dialog, styled } from '@mui/material';

export const DetailsDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'transparent',
    position: 'relative',
  },
});

export const CloseButtonContainer = styled(Box)({
  position: 'absolute',
  top: '3vh',
  right: 0,
  zIndex: 1,
});

export const DialogMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  height: '90vh',
  marginTop: theme.spacing(10),
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  backgroundColor: theme.palette.background.paper,
  overflow: 'hidden',
}));

export const DialogContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    overflowY: 'hidden',
  },
}));

export const DialogImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  flex: 1,
  height: '40vh',
  minHeight: '300px',

  [theme.breakpoints.up('md')]: {
    height: '100%',
    minHeight: '100%',
  },
}));

export const DialogContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'visible',

  [theme.breakpoints.up('md')]: {
    overflowY: 'auto',
  },
}));

export const HistoryContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  flex: 1,

  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
}));

export const SocialButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  justifyContent: 'flex-end',
}));
