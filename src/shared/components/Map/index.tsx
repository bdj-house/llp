import { sanityClient } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/queries';
import type { SiteSettings } from '@/sanity/types/schema';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogContent, IconButton, Toolbar, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { CenterBox } from '../Center';
import { If } from '../If';
import { Spinner } from '../Spinner';

interface Props {
  isOpen: boolean;
  close: () => void;
}

export const Map: React.FC<Props> = ({ isOpen, close }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { data: settings } = useQuery<SiteSettings>({
    queryKey: ['siteSettings'],
    queryFn: () => sanityClient.fetch(siteSettingsQuery),
    staleTime: 60 * 60 * 1000,
  });
  const mapUrl = settings?.googleMapUrl as string | undefined;

  const Loading = useMemo(
    () => (
      <CenterBox>
        <Spinner />
      </CenterBox>
    ),
    [],
  );

  const Error = useMemo(
    () => (
      <CenterBox>
        <Typography variant="subtitle1" color="error">
          Ocorreu um erro ao carregar o mapa, tente novamente mais tarde.
        </Typography>
      </CenterBox>
    ),
    [],
  );

  const GoogleMap = useMemo(
    () => (
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen
        sandbox="allow-same-origin allow-popups allow-scripts"
        src={mapUrl}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    ),
    [mapUrl],
  );

  return (
    <Dialog open={isOpen} onClose={close} maxWidth="md" fullWidth>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Nossa Localização</Typography>
        <IconButton edge="end" onClick={close} aria-label="Fechar mapa">
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
          <If condition={isLoading && !hasError}>{Loading}</If>

          <If sx={{ height: '100%' }} condition={hasError} elseRender={GoogleMap}>
            {Error}
          </If>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
