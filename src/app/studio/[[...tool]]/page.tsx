'use client';

import { NextStudio } from 'next-sanity/studio';
import { useEffect } from 'react';
import config from '@/sanity/sanity.config';
import { useHeader } from '@/shared/hooks';

export default function StudioPage() {
  const { setMode } = useHeader();

  useEffect(() => {
    setMode('hidden');
    return () => setMode('dynamic');
  }, [setMode]);

  return <NextStudio config={config} />;
}
