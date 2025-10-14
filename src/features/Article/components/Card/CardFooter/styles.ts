import { Box, styled } from '@mui/material';

export const FooterContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'flex-end',
});

export const AuthorSection = styled(Box, {
  shouldForwardProp: prop => prop !== 'isVertical',
})<{ isVertical?: boolean }>(({ isVertical }) => ({
  display: 'flex',
  flexDirection: isVertical ? 'column-reverse' : 'row',
  gap: '8px',
}));

export const AuthorInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const AuthorPlaceholder = styled(Box)({
  height: '10px',
});

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));
