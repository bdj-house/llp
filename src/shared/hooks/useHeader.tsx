import { use } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';

export const useHeader = () => {
  const context = use(HeaderContext);
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};
