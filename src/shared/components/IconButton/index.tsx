import { PropsWithChildren } from 'react';
import { Avatar, ButtonBase, useTheme } from '@mui/material';
import { BUTTON_ANIMATIONS } from '@/shared/constants';

interface Props {
  action: () => void;
  customBorderColor?: string;
  customBackground?: string;
  size?: 'medium' | 'large';
  ariaLabel?: string;
}

export const IconButton: React.FC<PropsWithChildren<Props>> = ({
  action,
  children,
  customBackground,
  customBorderColor,
  size = 'medium',
  ariaLabel,
}) => {
  const theme = useTheme();

  return (
    <ButtonBase onClick={action} aria-label={ariaLabel} title={ariaLabel}>
      <Avatar
        sx={{
          backgroundColor: customBackground ?? 'transparent',
          borderColor: customBorderColor ?? theme.palette.primary.dark,
          borderWidth: 0.3,
          padding: size === 'medium' ? 2 : 3,
          borderStyle: 'solid',
          ...BUTTON_ANIMATIONS.iconButton(theme.palette.primary.main),
          '&:hover': {
            ...BUTTON_ANIMATIONS.iconButton(theme.palette.primary.main)['&:hover'],
          },
        }}
      >
        {children}
      </Avatar>
    </ButtonBase>
  );
};
