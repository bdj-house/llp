import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import {
  ArrowLeftButton,
  ArrowRightButton,
  CloseButton,
  Content,
  CounterBadge,
  ImageContainer,
  LightboxDialog,
} from './styles';

interface OwnProps {
  selectedImage: number | null;
  setSelectedImage: (image: number | null) => void;
  images: string[];
  altText?: string;
}

export const LightboxGallery = ({
  images,
  altText = 'Gallery image',
  selectedImage,
  setSelectedImage,
}: OwnProps) => {
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

  const hasMultipleImages = images.length > 1;
  const isOpen = selectedImage !== null;

  return (
    <LightboxDialog open={isOpen} onClose={handleClose} maxWidth={false} fullWidth>
      <Content onKeyDown={handleKeyDown} tabIndex={0}>
        <CloseButton onClick={handleClose} aria-label="Fechar galeria">
          <CloseIcon />
        </CloseButton>

        {hasMultipleImages && (
          <ArrowLeftButton onClick={handlePrevious} aria-label="Imagem anterior">
            <ArrowBackIosIcon />
          </ArrowLeftButton>
        )}

        {hasMultipleImages && (
          <ArrowRightButton onClick={handleNext} aria-label="Próxima imagem">
            <ArrowForwardIosIcon />
          </ArrowRightButton>
        )}

        {selectedImage !== null && images[selectedImage] && (
          <ImageContainer>
            <Image
              src={images[selectedImage]}
              alt={`${altText} ${selectedImage + 1}`}
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </ImageContainer>
        )}

        {hasMultipleImages && selectedImage !== null && (
          <CounterBadge>
            {selectedImage + 1} de {images.length}
          </CounterBadge>
        )}
      </Content>
    </LightboxDialog>
  );
};
