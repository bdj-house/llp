import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMediaQuery, useTheme } from '@mui/material';
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const goToOurTeam = () => {
    const section = document.getElementById('our-team');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <InfoContainer>
      <div>
        <LogoWrapper>
          {logoUrl && (
            <Image
              src={logoUrl}
              alt="Logo"
              width={480}
              height={270}
              priority
              style={{
                maxWidth: '100%',
                height: 'auto',
                width: 'clamp(280px, 100%, 480px)',
              }}
            />
          )}
        </LogoWrapper>

        {!!title && (
          <TitleText variant="h5" color="secondary">
            {title}
          </TitleText>
        )}

        {!!subtitle && (
          <SubtitleText variant="h6" color="textSecondary">
            {subtitle}
          </SubtitleText>
        )}
      </div>

      {!isMobile && (
        <ScrollButtonContainer>
          <IconButton action={goToOurTeam} size="large" ariaLabel="Ir para nossa equipe">
            <ExpandMoreIcon color="primary" sx={{ fontSize: { xs: 36, md: 48 } }} />
          </IconButton>
        </ScrollButtonContainer>
      )}
    </InfoContainer>
  );
};
