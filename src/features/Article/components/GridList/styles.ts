import { Box, styled, SxProps, Theme } from '@mui/material';

// Main grid container
export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: theme.spacing(4),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  opacity: 1,
  transition: 'opacity 0.4s ease-in-out',

  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
  },

  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(36),
    paddingRight: theme.spacing(36),
  },

  '&.loading': {
    opacity: 0.4,
  },
}));

export const InfiniteScrollObserver = styled(Box)({
  width: '100%',
  height: '60px',
  gridColumn: '1 / -1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const getSkeletonWrapperStyles = (isHighlight?: boolean): SxProps<Theme> => ({
  gridColumn: isHighlight ? 'span 2' : 'span 1',
  gridRow: isHighlight ? 'span 2' : 'span 1',
});

export const articleButtonStyles: SxProps<Theme> = {
  width: '100%',
};
