'use client';

import { Footer } from '@/shared/components';
import Header from '@/shared/components/Header';
import { HeaderProvider } from '@/shared/providers';
import { ReactQueryProvider } from '@/shared/providers/ReactQueryProvider';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';
import theme from './theme';

export default function ThemeRegistry({
  children,
  initialQueryState,
}: {
  children: React.ReactNode;
  initialQueryState?: unknown;
}) {
  const cache = React.useMemo(() => {
    const cache = createCache({ key: 'mui', prepend: true });
    cache.compat = true;
    return cache;
  }, []);

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReactQueryProvider initialState={initialQueryState}>
          <HeaderProvider>
            <Header />
            {children}
            <Footer />
          </HeaderProvider>
        </ReactQueryProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
