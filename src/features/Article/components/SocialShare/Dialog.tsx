'use client';

import { ContentCopy, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { BaseDialog } from '@/shared/components';

interface Props {
  open: boolean;
  onClose: () => void;
  shareUrl: string;
  title?: string;
}

export const SocialShareDialog: React.FC<Props> = ({
  open,
  onClose,
  shareUrl,
  title,
}) => {
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title ?? '');

  const [copied, setCopied] = useState(false);

  const shareOptions = [
    {
      icon: <WhatsApp />,
      label: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      icon: <Twitter />,
      label: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank');
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <BaseDialog open={open} onClose={onClose} title="Compartilhar Artigo">
      <Typography variant="body1" mb={2}>
        Escolha uma plataforma para compartilhar este artigo:
      </Typography>

      <Stack direction="row" spacing={2} mb={3}>
        {shareOptions.map(option => (
          <IconButton
            key={option.label}
            onClick={() => handleShare(option.url)}
            size="large"
            color="primary"
            sx={{
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 2,
              width: 56,
              height: 56,
            }}
          >
            {option.icon}
          </IconButton>
        ))}

        <IconButton
          onClick={handleCopy}
          size="large"
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            width: 56,
            height: 56,
          }}
        >
          <ContentCopy />
        </IconButton>
      </Stack>

      {copied && (
        <Typography variant="caption" color="success.main">
          Link copiado para a área de transferência.
        </Typography>
      )}
    </BaseDialog>
  );
};
