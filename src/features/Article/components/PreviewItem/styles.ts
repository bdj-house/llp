import { alpha, Box, Card, CardContent, Typography, styled, SxProps, Theme } from '@mui/material';

interface CardProps {
  isHighlight: boolean;
}

export const StyledCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'isHighlight',
})<CardProps>(({ isHighlight }) => ({
  height: isHighlight ? 800 : 400,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'none',
  borderTop: '0.3px solid black',
  borderRadius: 2,
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: 0.5,
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  height: '70%',
  backgroundColor: alpha(theme.palette.background.default, 0.2),
}));

export const TagsContainer = styled(Box)({
  position: 'absolute',
  bottom: 16,
  left: 8,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
});

export const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '30%',
  textAlign: 'center',
  width: '100%',
});

export const DateReadTimeContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 8,
});

interface TitleProps {
  isHighlight: boolean;
}

export const StyledTitle = styled(Typography, {
  shouldForwardProp: prop => prop !== 'isHighlight',
})<TitleProps>(({ isHighlight }) => ({
  fontWeight: 'bold',
  display: '-webkit-box',
  WebkitLineClamp: isHighlight ? 4 : 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textAlign: 'center',
}));

export const StyledExcerpt = styled(Typography)({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  marginTop: 16,
  textAlign: 'center',
});

export const articleButtonStyles: SxProps<Theme> = {
  width: '100%',
};
