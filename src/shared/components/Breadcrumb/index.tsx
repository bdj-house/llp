import { useRouter } from 'next/navigation';
import { ChevronRight, Home } from '@mui/icons-material';
import { Box, ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
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

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const goToLastPage = () => {
    router.replace(lastPage.route);
  };

  const goToHome = () => {
    router.push(Routes.Home);
  };

  return (
    <Box display="flex" alignItems="center" gap={1} mx="15%" mt={4}>
      {!isMobile && (
        <>
          <ButtonBase
            onClick={goToHome}
            aria-label="Ir para a página inicial"
            title="Início"
            sx={{ p: 1 }}
          >
            <Home color="primary" />
          </ButtonBase>
          <ChevronRight />
        </>
      )}

      <ButtonBase onClick={goToLastPage} aria-label={`Ir para ${lastPage.label}`}>
        <Typography
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: { xs: '80px', sm: '120px', md: 'none' },
          }}
        >
          {lastPage.label}
        </Typography>
      </ButtonBase>

      <ChevronRight />
      <Typography
        color="text.primary"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: { xs: '100px', sm: '150px', md: 'none' },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
