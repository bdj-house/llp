import type { Associate as SanityAssociate } from '@/sanity/types/schema';

/**
 * UI-friendly Associate type
 * Extracts only the fields needed for the About screen
 */
export type UiAssociate = Pick<
  SanityAssociate,
  'name' | 'role' | 'history' | 'description' | 'graduation' | 'email' | 'linkedin' | 'whatsapp'
> & {
  imageCover?: string;
  imageProfile?: string;
};

/**
 * About section info structure
 */
export interface AboutSectionInfo {
  title: string;
  subtitle: string;
  subject: string;
}

/**
 * About screen props
 */
export interface AboutScreenProps {
  associates: UiAssociate[];
  sectionInfo: AboutSectionInfo;
}
