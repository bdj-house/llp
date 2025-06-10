'use client';

import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { PropsWithChildren, useMemo, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { googleMapUrl } from '@/shared/constants';
import If from '../If';

interface Props {
  isOpen: boolean;
  close: () => void;
}

const CenterBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ height: 400, flex: 1, alignContent: 'center', justifyItems: 'center' }}>
      {children}
    </Box>
  );
};

export const Map: React.FC<Props> = ({ isOpen, close }) => {
  const theme = useTheme();

  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const Loading = useMemo(() => (
    <CenterBox><HashLoader color={theme.palette.primary.dark} /></CenterBox>
  ), [theme.palette.primary.dark]);

  const Error = useMemo(() => (
    <CenterBox>
      <Typography variant="subtitle1" color="error">Ocorreu um erro ao carregar o mapa, tente novamente mais tarde.</Typography>
    </CenterBox>
  ), []);

  const GoogleMap = useMemo(() => (
    <iframe
      title="Google Map"
      width="100%"
      height="100%"
      loading="lazy"
      style={{ border: 0 }}
      allowFullScreen
      // eslint-disable-next-line react-dom/no-unsafe-iframe-sandbox
      sandbox="allow-same-origin allow-popups allow-scripts"
      src={googleMapUrl}
      onLoad={() => setIsLoading(false)}
      onError={() => setHasError(true)}
    />
  ), []);

  return (
    <Dialog open={isOpen} onClose={close} maxWidth="md" fullWidth>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Nossa Localização</Typography>
        <IconButton edge="end" onClick={close}>
          <CloseIcon />
        </IconButton>
      </Toolbar>

      <DialogContent>
        <Box
          sx={{
            height: 400,
            width: '100%',
            borderRadius: 2,
            overflow: 'hidden',
            mb: 2,
          }}
        >
          <If condition={isLoading && !hasError}>
            {Loading}
          </If>

          <If sx={{ height: '100%' }} condition={hasError} elseRender={GoogleMap}>
            {Error}
          </If>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
