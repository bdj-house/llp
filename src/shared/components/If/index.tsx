import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
  condition: boolean | undefined;
  elseRender?: ReactNode;
  children: ReactNode | string;
  sx?: React.CSSProperties;
}

export const If: FC<Props> = function ({ condition, elseRender = null, children, sx }) {
  return <Box sx={sx}>{condition ? children : elseRender}</Box>;
};
