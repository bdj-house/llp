// src/shared/contexts/HeaderContext.tsx

'use client';

import { createContext } from 'react';

export type HeaderMode = 'dynamic' | 'static' | 'hidden';

interface HeaderContextProps {
  mode: HeaderMode;
  setMode: (mode: HeaderMode) => void;
}

export const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);
