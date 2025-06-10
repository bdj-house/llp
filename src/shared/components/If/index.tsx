import { Box } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface Props {
  condition: boolean | undefined;
  elseRender?: ReactNode;
  children: ReactNode | string;
  sx?: React.CSSProperties;
}

const If: FC<Props> = function ({
  condition,
  elseRender = null,
  children,
  sx,
}) {
  return <Box sx={sx}>{condition ? children : elseRender}</Box>;
};

export default If;
