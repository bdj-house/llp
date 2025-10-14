/**
 * Sanity environment variables
 * Accessed directly from process.env for maximum compatibility
 */

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-05-01';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined || v === '') {
    if (process.env.NODE_ENV === 'production') {
      throw new Error(errorMessage);
    }

    console.warn(`⚠️ ${errorMessage}`);
    console.warn('📝 Please set this in your .env.local or .env.development file');

    return '' as T;
  }

  return v;
}
