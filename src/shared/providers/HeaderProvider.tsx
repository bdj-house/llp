import React, { ReactNode, useState } from 'react';
import { HeaderContext, HeaderMode } from '../contexts/HeaderContext';

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<HeaderMode>('dynamic');

  const value = React.useMemo(() => ({ mode, setMode }), [mode, setMode]);

  return (
    <HeaderContext value={value}>
      {children}
    </HeaderContext>
  );
};
