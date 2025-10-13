import { BUTTON_ANIMATIONS } from '@/shared/constants';
import { Avatar, ButtonBase, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

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
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.action.hover,
          },
        }}
      >
        {children}
      </Avatar>
    </ButtonBase>
  );
};
