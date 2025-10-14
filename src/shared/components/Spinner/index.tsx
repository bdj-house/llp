import { HashLoader } from 'react-spinners';
import { useTheme } from '@mui/material';

export const Spinner = () => {
  const theme = useTheme();

  return <HashLoader color={theme.palette.primary.dark} />;
};
