import { ChevronRight, Home } from '@mui/icons-material';
import { Box, ButtonBase, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Routes } from '@/config/routes';

interface Props {
  lastPage: {
    label: string;
    route: string;
  };
  title?: string;
}

export const Breadcrumb: React.FC<Props> = ({ title, lastPage }) => {
  const router = useRouter();

  const goToLastPage = () => {
    router.replace(lastPage.route);
  };

  const goToHome = () => {
    router.push(Routes.Home);
  };

  return (
    <Box display="flex" alignItems="center" gap={1} mx="15%" mt={4}>
      <ButtonBase onClick={goToHome}>
        <Home color="primary" />
      </ButtonBase>
      <ChevronRight />
      <ButtonBase onClick={goToLastPage}>
        <Typography color="text.secondary">{lastPage.label}</Typography>
      </ButtonBase>

      <ChevronRight />
      <Typography color="text.primary">{title}</Typography>
    </Box>
  );
};
