import { Avatar, Button, styled } from '@mui/material';

export const AssociateAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  margin: '0 auto',
  boxShadow: theme.shadows[3],

  [theme.breakpoints.up('md')]: {
    width: 240,
    height: 240,
  },
}));

export const LearnMoreButton = styled(Button)(({ theme }) => ({
  paddingLeft: 0,
  position: 'relative',

  '&:hover': {
    backgroundColor: 'transparent',
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    height: '2px',
    bottom: '-5px',
    left: '-10px',
    backgroundColor: theme.palette.primary.main,
    width: 0,
    transition: 'width 0.4s ease',
  },

  '&:hover:after': {
    width: '35%',
  },
}));
