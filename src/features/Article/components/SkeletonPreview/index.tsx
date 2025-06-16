import { Box, Skeleton } from '@mui/material';

interface Props {
  isHighlight?: boolean;
}

export const SkeletonPreview: React.FC<Props> = ({ isHighlight }) => {
  const height = isHighlight ? 420 : 240;
  const width = isHighlight ? '100%' : '100%';

  return (
    <Box width={width} height={height}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={height - 60}
        sx={{ borderRadius: 2 }}
      />
      <Skeleton width="60%" />
      <Skeleton width="40%" />
    </Box>
  );
};
