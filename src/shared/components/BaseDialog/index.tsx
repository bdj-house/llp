'use client';

import { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
} from '@mui/material';
import { If } from '../If';

interface BaseDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  actions?: ReactNode;
  width?: number;
  hideClose?: boolean;
}

export const BaseDialog: React.FC<BaseDialogProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  hideClose,
  width = 480,
}) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 4,
            px: 4,
            py: 3,
            width,
            bgcolor: theme.palette.background.paper,
          },
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <DialogTitle sx={{ p: 0, fontWeight: 700 }}>{title}</DialogTitle>

        <If condition={!hideClose}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </If>
      </Box>

      <DialogContent sx={{ px: 0, pt: 1 }}>{children}</DialogContent>

      {actions && <DialogActions sx={{ px: 0, pt: 3 }}>{actions}</DialogActions>}
    </Dialog>
  );
};
