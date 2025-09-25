'use client';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, DialogContent, IconButton, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryProps {
  images: string[];
  altText?: string;
}

export const Gallery = ({ images, altText = 'Gallery image' }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePrevious();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          alignItems: 'stretch',
          gap: 4,
          gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
        }}
      >
        <Box>
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              height: { xs: 260, md: 420 },
              overflow: 'hidden',
              cursor: images.length > 1 ? 'pointer' : 'default',
              '&:hover':
                images.length > 1
                  ? {
                      '&::after': {
                        content: '"Clique para ver galeria"',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 500,
                        zIndex: 1,
                      },
                    }
                  : {},
            }}
            onClick={() => handleImageClick(0)}
          >
            {images[0] && (
              <Image src={images[0]} alt={`${altText} 1`} fill style={{ objectFit: 'cover' }} />
            )}
          </Paper>
        </Box>

        <Box>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              height: '100%',
              gridTemplateColumns: { xs: '1fr 1fr', md: '1fr' },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                position: 'relative',
                height: 180,
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover': {
                  '&::after': {
                    content: '"Ver imagem"',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 500,
                    zIndex: 1,
                  },
                },
              }}
              onClick={() => handleImageClick(1)}
            >
              {images[1] && (
                <Image src={images[1]} alt={`${altText} 2`} fill style={{ objectFit: 'cover' }} />
              )}
            </Paper>
            <Paper
              elevation={0}
              sx={{
                position: 'relative',
                height: 180,
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover': {
                  '&::after': {
                    content: '"Ver imagem"',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 500,
                    zIndex: 1,
                  },
                },
              }}
              onClick={() => handleImageClick(2)}
            >
              {images[2] && (
                <Image src={images[2]} alt={`${altText} 3`} fill style={{ objectFit: 'cover' }} />
              )}
            </Paper>
          </Box>

          {images.length > 3 && (
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleImageClick(3)}
                sx={{
                  fontSize: '12px',
                  textTransform: 'none',
                  borderStyle: 'dashed',
                }}
              >
                +{images.length - 3} mais imagens
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      <Dialog
        open={selectedImage !== null}
        onClose={handleClose}
        maxWidth={false}
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            margin: 2,
          },
        }}
      >
        <DialogContent
          sx={{
            position: 'relative',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '70vh',
          }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 2,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {images.length > 1 && (
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: 'absolute',
                left: 16,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 2,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}

          {images.length > 1 && (
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 16,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 2,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}

          {selectedImage !== null && images[selectedImage] && (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '70vh',
                maxWidth: '80vw',
              }}
            >
              <Image
                src={images[selectedImage]}
                alt={`${altText} ${selectedImage + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          )}

          {images.length > 1 && selectedImage !== null && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '8px 16px',
                borderRadius: 1,
                zIndex: 2,
              }}
            >
              <Typography variant="body2">
                {selectedImage + 1} de {images.length}
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
