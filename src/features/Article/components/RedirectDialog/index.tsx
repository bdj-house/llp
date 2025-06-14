import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

interface RedirectDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const RedirectDialog: React.FC<RedirectDialogProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Deixando nossa página</DialogTitle>
      <DialogContent>
        <Typography variant="body1" mb={2}>
          Esta publicação é de um autor externo. Gostaria de continuar e abrir a página original?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancelar
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="primary"
        >
          Continuar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
