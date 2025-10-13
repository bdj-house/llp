'use client';

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
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: `0 0 12px ${theme.palette.primary.main}`,
            transform: 'scale(1.05)',
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

// import { Avatar, ButtonBase, useTheme } from '@mui/material';
// import { PropsWithChildren } from 'react';

// interface Props {
//   action: () => void;
//   customBorderColor?: string;
//   customBackground?: string;
//   size?: 'medium' | 'large';
// }

// export const IconButton: React.FC<PropsWithChildren<Props>> = ({
//   action,
//   children,
//   customBackground,
//   customBorderColor,
//   size = 'medium',
// }) => {
//   const theme = useTheme();
//   const sizePx = size === 'large' ? 72 : 56;

//   return (
//     <ButtonBase
//       onClick={action}
//       sx={{
//         position: 'relative',
//         width: sizePx,
//         height: sizePx,
//         borderRadius: '50%',
//         overflow: 'visible',
//         p: 0,
//         '&::after': {
//           content: '""',
//           position: 'absolute',
//           inset: 0,
//           borderRadius: '50%',
//           padding: '2px',
//           background: `
//             conic-gradient(${theme.palette.primary.main} 0deg, transparent 90deg 360deg)
//             `,
//           maskImage:
//             'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))',
//           WebkitMaskImage:
//             'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))',
//           zIndex: 1,
//           opacity: 0,
//           transition: 'opacity 0.3s ease',
//           animation: 'rotateSweep 1.4s linear infinite',
//           transformOrigin: 'center',
//           pointerEvents: 'none',
//         },
//         '&:hover::after': {
//           opacity: 1,
//         },
//       }}
//     >
//       <Avatar
//         sx={{
//           width: sizePx,
//           height: sizePx,
//           backgroundColor: customBackground ?? 'transparent',
//           border: `0.3px solid ${
//             customBorderColor ?? theme.palette.primary.dark
//           }`,
//           zIndex: 2,
//         }}
//       >
//         {children}
//       </Avatar>
//     </ButtonBase>
//   );
// };
