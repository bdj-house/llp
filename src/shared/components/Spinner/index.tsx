import { useTheme } from '@mui/material';
import { HashLoader } from 'react-spinners';

export const Spinner = () => {
  const theme = useTheme();

  return (
    <HashLoader color={theme.palette.primary.dark} />
  );
};
