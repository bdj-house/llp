'use client';

import { LightboxGallery } from '@/shared/components';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import {
  Container,
  MainImagePaper,
  MoreImagesButton,
  MoreImagesContainer,
  ThumbnailGrid,
  ThumbnailPaper,
} from './styles';

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

  return (
    <>
      <Container>
        <Box>
          <MainImagePaper elevation={0} onClick={() => handleImageClick(0)}>
            {images[0] && (
              <Image
                src={images[0]}
                alt={`${altText} 1`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            )}
          </MainImagePaper>
        </Box>

        <Box>
          <ThumbnailGrid>
            <ThumbnailPaper elevation={0} onClick={() => handleImageClick(1)}>
              {images[1] && (
                <Image
                  src={images[1]}
                  alt={`${altText} 2`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              )}
            </ThumbnailPaper>

            <ThumbnailPaper elevation={0} onClick={() => handleImageClick(2)}>
              {images[2] && (
                <Image
                  src={images[2]}
                  alt={`${altText} 3`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              )}
            </ThumbnailPaper>
          </ThumbnailGrid>

          {images.length > 3 && (
            <MoreImagesContainer>
              <MoreImagesButton variant="outlined" size="small" onClick={() => handleImageClick(3)}>
                +{images.length - 3} mais imagens
              </MoreImagesButton>
            </MoreImagesContainer>
          )}
        </Box>
      </Container>

      <LightboxGallery
        images={images}
        altText={altText}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
};
