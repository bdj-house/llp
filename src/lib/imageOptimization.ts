/**
 * Image optimization utilities for better perceived performance
 */

/**
 * Generates a low-quality placeholder (LQIP) SVG for blur effect
 * @param width - Image width
 * @param height - Image height
 * @returns Base64 encoded SVG blur placeholder
 */
export function generateBlurPlaceholder(width: number = 10, height: number = 10): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f5f5f5;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
    </svg>
  `;

  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Get Sanity image with blur data URL
 * @param imageUrl - Sanity image URL
 * @returns Object with src and blurDataURL
 */
export function getSanityImageWithBlur(imageUrl?: string) {
  if (!imageUrl) {
    return {
      src: '',
      blurDataURL: generateBlurPlaceholder(),
    };
  }

  // For Sanity images, we can use their built-in blur functionality
  const blurUrl = `${imageUrl}?blur=20&w=10&q=10`;

  return {
    src: imageUrl,
    blurDataURL: generateBlurPlaceholder(),
  };
}

/**
 * Preload critical images
 * @param urls - Array of image URLs to preload
 */
export function preloadImages(urls: string[]) {
  if (typeof window === 'undefined') return;

  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}
