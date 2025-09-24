'use client';

import { OpacityCard, ViewContainer } from '@/shared/components';
import {
  Close as CloseIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useMemo, useState } from 'react';

type Associate = {
  name: string;
  role: string;
  history?: string;
  description?: string;
  graduation?: string;
  imageCover?: string;
  imageProfile?: string;
  email?: string;
  linkedin?: string;
  whatsapp?: string;
};

interface Props {
  associates: Associate[];
  sectionInfo: {
    title: string;
    subtitle: string;
    subject: string;
  };
}

export const AboutScreen: React.FC<Props> = ({ associates, sectionInfo }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectedAssociate = useMemo(() => associates[selectedIndex], [selectedIndex, associates]);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    setTimeout(() => {
      setSelectedIndex(0);
    }, 300);
  };

  return (
    <ViewContainer
      header={{
        title: sectionInfo.title,
        subtitle: sectionInfo.subtitle,
        subject: sectionInfo.subject,
      }}
      customBg
      id="our-team"
    >
      <Box display="flex" flexDirection="column">
        {associates.map(({ name, role, description, imageCover }, index) => (
          <OpacityCard key={`${name}-${index}`} index={index}>
            <Grid
              container
              spacing={3}
              direction={{
                xs: 'column',
                md: index % 2 !== 0 ? 'row-reverse' : 'row',
              }}
              alignItems="center"
              py={6}
              px={36}
            >
              <Grid size={3}>
                <Avatar
                  alt={name}
                  src={imageCover}
                  sx={{
                    width: 240,
                    height: 240,
                    mx: 'auto',
                    boxShadow: 3,
                  }}
                />
              </Grid>

              <Grid size={3}>
                <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="subtitle2" gutterBottom color="secondary" fontWeight={600}>
                  {role}
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={2}>
                  {description}
                </Typography>
                <Button
                  variant="text"
                  disableRipple
                  onClick={() => handleOpen(index)}
                  sx={{
                    pl: 0,
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      height: '2px',
                      bottom: -5,
                      left: -10,
                      backgroundColor: 'primary.main',
                      width: 0,
                      transition: 'width 0.4s ease',
                    },
                    '&:hover:after': {
                      width: '35%',
                    },
                  }}
                >
                  <Typography fontWeight="bold">Saiba mais →</Typography>
                </Button>
              </Grid>
            </Grid>
          </OpacityCard>
        ))}

        <Dialog
          key={selectedIndex}
          open={open}
          onClose={handleClose}
          fullScreen
          slotProps={{
            paper: {
              sx: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                bgcolor: 'transparent',
                position: 'relative',
              },
            },
          }}
        >
          <Box sx={{ position: 'absolute', top: '3vh', right: 0, zIndex: 1 }}>
            <IconButton sx={{ color: theme.palette.background.default }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            display="flex"
            gap={3}
            height="90vh"
            mt={10}
            sx={{
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box position="relative" flex={1}>
              {selectedAssociate?.imageProfile && (
                <Image
                  src={selectedAssociate?.imageProfile}
                  alt={selectedAssociate?.name ?? ''}
                  fill
                />
              )}
            </Box>

            <Box sx={{ padding: 4, flex: 1, overflowY: 'auto' }}>
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

              <Box width="70%">
                <Typography variant="body1" fontSize={20} mt={2} color="text.secondary">
                  {selectedAssociate?.history}
                </Typography>
              </Box>

              <Box display="flex" gap={2} mt={3} justifyContent="flex-end">
                <IconButton
                  component="a"
                  href={`mailto:${selectedAssociate?.email}`}
                  sx={{ '&:hover': { color: theme.palette.primary.main } }}
                >
                  <EmailIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href={selectedAssociate?.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ '&:hover': { color: theme.palette.primary.main } }}
                >
                  <WhatsAppIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href={selectedAssociate?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ '&:hover': { color: theme.palette.primary.main } }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </ViewContainer>
  );
};
