'use client';

import { reportWebVitals } from '@/lib/webVitals';
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals(metric => {
    reportWebVitals(metric);
  });

  return null;
}
