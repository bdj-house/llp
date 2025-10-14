import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const withPWA =
  process.env.NODE_ENV === 'production' ? require('./next.config.pwa.js') : (config: any) => config;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    ...(process.env.NODE_ENV === 'production' && {
      optimizeCss: true,
    }),
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';

    const cspDirectives = isDev
      ? [
          "default-src 'self' 'unsafe-inline' 'unsafe-eval'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.sanity.io",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https: http: blob:",
          "font-src 'self' data:",
          "connect-src 'self' https: http: ws: wss:",
          "frame-src 'self' https://www.googletagmanager.com https://maps.google.com https://www.google.com",
          "media-src 'self' https: http:",
          "worker-src 'self' blob:",
        ]
      : [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https: blob:",
          "font-src 'self' data:",
          "connect-src 'self' https://cdn.sanity.io https://*.sanity.io https://www.google-analytics.com",
          "frame-src 'self' https://www.googletagmanager.com https://maps.google.com https://www.google.com",
          "media-src 'self' https://cdn.sanity.io",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          "frame-ancestors 'none'",
        ];

    if (!isDev) {
      cspDirectives.push('upgrade-insecure-requests');
    }

    return [
      {
        source: '/:path*',
        headers: [
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // XSS Protection (legacy browsers)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Permissions Policy (restrict browser features)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Strict Transport Security (HTTPS only) - only in production
          ...(isDev
            ? []
            : [
                {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=63072000; includeSubDomains; preload',
                },
              ]),
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: cspDirectives.join('; '),
          },
        ],
      },
    ];
  },
};

// Bundle analyzer is Webpack-only, only apply in production or when explicitly analyzing
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Apply plugins conditionally
// In development with Turbopack: use raw config
// In production or when analyzing: apply PWA and bundle analyzer
const finalConfig =
  process.env.NODE_ENV === 'production' || process.env.ANALYZE === 'true'
    ? bundleAnalyzer(withPWA(nextConfig))
    : nextConfig;

export default finalConfig;
