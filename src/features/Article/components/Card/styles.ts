import { Box, Card, CardProps, styled } from '@mui/material';
import { CARD_DIMENSIONS } from '@/shared/constants';

interface StyledCardProps extends CardProps {
  bgColor?: string;
  textColor?: string;
  height?: number;
  width?: number;
  mobileCardWidth?: number | string;
  isVertical?: boolean;
}

export const StyledCard = styled(Card, {
  shouldForwardProp: prop =>
    prop !== 'bgColor' &&
    prop !== 'textColor' &&
    prop !== 'height' &&
    prop !== 'width' &&
    prop !== 'mobileCardWidth' &&
    prop !== 'isVertical',
})<StyledCardProps>(
  ({ theme, bgColor, textColor, height, width, mobileCardWidth, isVertical }) => ({
    backgroundColor: bgColor,
    color: textColor,
    padding: theme.spacing(0.5),
    height: `${CARD_DIMENSIONS.MOBILE.HEIGHT}px`,
    width: mobileCardWidth || '100%',
    maxWidth: '100%',
    borderRadius: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    boxShadow: theme.shadows[3],
    transition: 'transform 0.2s ease-in-out',

    '&:hover': {
      boxShadow: theme.shadows[6],
      transform: 'scale(1.010)',
    },

    [theme.breakpoints.up('md')]: {
      height: height ? `${height}px` : 'auto',
      width: width ? `${width}px` : 'auto',
      maxWidth: 'none',
      flexDirection: isVertical ? 'column' : 'row',
    },
  }),
);

export const CardContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  flex: 1,
  marginTop: theme.spacing(1),
}));
