import type { Metric } from 'web-vitals';

/**
 * Web Vitals reporting for Core Web Vitals metrics
 * Reports: CLS, FID, FCP, LCP, TTFB, INP
 */
export function reportWebVitals(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    });
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Send to Google Analytics if available
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Optional: Send to Vercel Analytics if using Vercel
    // @ts-ignore - Vercel injects this
    if (window.va) {
      // @ts-ignore
      window.va('event', {
        name: 'web-vitals',
        data: {
          metric: metric.name,
          value: metric.value,
          rating: metric.rating,
        },
      });
    }
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params: Record<string, unknown>) => void;
    va?: (command: string, data: Record<string, unknown>) => void;
  }
}
