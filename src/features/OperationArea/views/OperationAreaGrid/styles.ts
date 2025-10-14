import { Box, Paper, styled } from '@mui/material';

export const OperationAreaPaper = styled(Paper, {
  shouldForwardProp: prop => prop !== 'backgroundColor' && prop !== 'hoverBackgroundColor',
})<{ backgroundColor?: string; hoverBackgroundColor?: string }>(
  ({ theme, backgroundColor, hoverBackgroundColor }) => ({
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: backgroundColor || theme.palette.background.paper,
    transition: 'all 0.3s ease',
    cursor: 'pointer',

    [theme.breakpoints.up('sm')]: {
      height: '220px',
    },

    [theme.breakpoints.up('md')]: {
      height: '240px',
    },

    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows[2],
      backgroundColor: hoverBackgroundColor || backgroundColor || theme.palette.action.hover,
    },
  }),
);

export const DetailsArea = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 1,
});
