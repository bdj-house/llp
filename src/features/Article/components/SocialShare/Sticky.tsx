import { LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';

interface Props {
  title?: string;
}

export const SocialShareSticky: React.FC<Props> = ({ title }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title ?? '');
    let url = '';

    switch (platform) {
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
    }

    window.open(url, '_blank');
  };

  if (isMobile) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '40%',
        left: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        zIndex: 999,
      }}
    >
      <IconButton onClick={() => handleShare('whatsapp')} color="primary">
        <WhatsApp />
      </IconButton>
      <IconButton onClick={() => handleShare('linkedin')} color="primary">
        <LinkedIn />
      </IconButton>
      <IconButton onClick={() => handleShare('twitter')} color="primary">
        <Twitter />
      </IconButton>
    </Box>
  );
};
