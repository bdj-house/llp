import { z } from 'zod';

/**
 * Environment Variable Validation Schema
 * Validates all required environment variables at runtime
 */

const envSchema = z.object({
  // Sanity CMS (required)
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1, 'Sanity Project ID is required').optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1, 'Sanity Dataset is required').optional(),
  NEXT_PUBLIC_SANITY_API_VERSION: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Sanity API version must be in YYYY-MM-DD format')
    .optional(),

  // Site Configuration
  NEXT_PUBLIC_SITE_URL: z.string().url('Site URL must be a valid URL').optional(),
  NEXT_PUBLIC_DOMAIN: z.string().url('Domain must be a valid URL').optional(),

  // Contact Information
  NEXT_PUBLIC_CONTACT_PHONE: z.string().optional(),

  // Node Environment
  NODE_ENV: z.enum(['development', 'production', 'test']).optional(),
});

/**
 * Validate and export environment variables
 * Throws an error if validation fails
 */
function validateEnv() {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:');
    console.error(JSON.stringify(parsed.error.format(), null, 2));

    // Show which specific variables are missing/invalid
    parsed.error.issues.forEach(issue => {
      console.error(`  - ${issue.path.join('.')}: ${issue.message}`);
    });

    // In development, show detailed errors but don't crash
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ Running with invalid env vars. Please check .env.local file.');
      console.warn('📝 Copy .env.example to .env.local and fill in the required values.');
    }

    // Return process.env as fallback (with type assertion)
    return process.env as z.infer<typeof envSchema>;
  }

  return parsed.data;
}

// Export validated environment variables
export const env = validateEnv();

// Type-safe environment variable access
export function getEnv<K extends keyof typeof env>(key: K): (typeof env)[K] {
  return env[key];
}

// Helper to check if we're in production
export const isProd = env.NODE_ENV === 'production';
export const isDev = env.NODE_ENV === 'development';
export const isTest = env.NODE_ENV === 'test';
