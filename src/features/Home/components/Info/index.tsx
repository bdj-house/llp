import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { IconButton } from '@/shared/components';
import {
  InfoContainer,
  LogoWrapper,
  ScrollButtonContainer,
  SubtitleText,
  TitleText,
} from './styles';

interface Props {
  logoUrl?: string;
  title?: string;
  subtitle?: string;
}

export const Info: React.FC<Props> = ({ logoUrl, title, subtitle }) => {
  const theme = useTheme();

  const goToOurTeam = () => {
    const section = document.getElementById('our-team');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <InfoContainer>
      <div>
        <LogoWrapper>
          {logoUrl && (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                aspectRatio: '480 / 270',
              }}
            >
              <Image
                src={logoUrl}
                alt="Logo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
          )}
        </LogoWrapper>

        {!!title && (
          <TitleText variant="h5" color="secondary">
            {title}
          </TitleText>
        )}

        {!!subtitle && <SubtitleText variant="h6">{subtitle}</SubtitleText>}
      </div>

      <ScrollButtonContainer>
        <IconButton action={goToOurTeam} size="large" ariaLabel="Ir para nossa equipe">
          <ExpandMoreIcon color="primary" sx={{ fontSize: { xs: 36, md: 48 } }} />
        </IconButton>
      </ScrollButtonContainer>
    </InfoContainer>
  );
};
