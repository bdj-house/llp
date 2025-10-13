'use client';

import Image from 'next/image';
import {
  Close as CloseIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import { Divider, IconButton, Typography, useTheme } from '@mui/material';
import {
  CloseButtonContainer,
  DetailsDialog,
  DialogContentContainer,
  DialogContentWrapper,
  DialogImageContainer,
  DialogMainContainer,
  HistoryContainer,
  SocialButtonsContainer,
} from './styles';
import { UiAssociate } from '../../types';

interface OwnProps {
  open: boolean;
  onClose: () => void;
  selectedAssociate: UiAssociate;
}

export const DetailsAssociate = ({ open, onClose, selectedAssociate }: OwnProps) => {
  const theme = useTheme();

  return (
    <DetailsDialog key={selectedAssociate.name} open={open} onClose={onClose} fullScreen>
      <CloseButtonContainer>
        <IconButton
          sx={{ color: theme.palette.background.default }}
          onClick={onClose}
          aria-label="Fechar detalhes da associada"
        >
          <CloseIcon />
        </IconButton>
      </CloseButtonContainer>

      <DialogMainContainer>
        <DialogContentWrapper>
          {/* Associate Image */}
          <DialogImageContainer>
            {selectedAssociate?.imageProfile && (
              <Image
                src={selectedAssociate.imageProfile}
                alt={selectedAssociate.name ?? ''}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            )}
          </DialogImageContainer>

          {/* Associate Details */}
          <DialogContentContainer>
            <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
              {selectedAssociate?.name}
            </Typography>

            <Typography
              variant="subtitle1"
              color="secondary"
              fontSize={18}
              fontWeight={700}
              gutterBottom
            >
              {selectedAssociate?.role}
            </Typography>

            <Typography variant="body1" color="text.secondary" mb={2}>
              {selectedAssociate?.graduation}
            </Typography>

            <Divider sx={{ my: 1 }} />

            <HistoryContainer>
              <Typography
                variant="body1"
                fontSize={{ xs: 16, md: 20 }}
                mt={2}
                color="text.secondary"
              >
                {selectedAssociate?.history}
              </Typography>
            </HistoryContainer>

            <SocialButtonsContainer>
              <IconButton
                component="a"
                href={`mailto:${selectedAssociate?.email ?? ''}`}
                aria-label="Enviar e-mail"
                sx={{ '&:hover': { color: theme.palette.primary.main } }}
              >
                <EmailIcon />
              </IconButton>

              <IconButton
                component="a"
                href={selectedAssociate?.whatsapp ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp"
                sx={{ '&:hover': { color: theme.palette.primary.main } }}
              >
                <WhatsAppIcon />
              </IconButton>

              <IconButton
                component="a"
                href={selectedAssociate?.linkedin ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir LinkedIn"
                sx={{ '&:hover': { color: theme.palette.primary.main } }}
              >
                <LinkedInIcon />
              </IconButton>
            </SocialButtonsContainer>
          </DialogContentContainer>
        </DialogContentWrapper>
      </DialogMainContainer>
    </DetailsDialog>
  );
};
