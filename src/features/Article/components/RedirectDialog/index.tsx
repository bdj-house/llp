import React from 'react';
import { Button, DialogContent, DialogTitle, Typography } from '@mui/material';
import { BaseDialog } from '@/shared/components';

interface RedirectDialogProps {
  open: boolean;
  onClose: () => void;
  url: string;
}

export const RedirectDialog: React.FC<RedirectDialogProps> = ({ open, url, onClose }) => {
  const confirmRedirect = () => {
    window.open(url, '_blank');
    onClose();
  };

  return (
    <BaseDialog
      open={open}
      onClose={onClose}
      hideClose
      actions={
        <React.Fragment>
          <Button onClick={onClose} variant="outlined">
            Cancelar
          </Button>
          <Button onClick={confirmRedirect} variant="contained" color="primary">
            Continuar
          </Button>
        </React.Fragment>
      }
    >
      <DialogTitle>Deixando nossa página</DialogTitle>
      <DialogContent>
        <Typography variant="body1" mb={2}>
          Esta publicação é de um autor externo. Gostaria de continuar e abrir a página original?
        </Typography>
      </DialogContent>
    </BaseDialog>
  );
};
