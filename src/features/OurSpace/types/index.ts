/**
 * Our Space screen header configuration
 */
export interface OurSpaceHeader {
  title?: string;
  subtitle?: string;
  subject?: string;
}

/**
 * Our Space section content
 */
export interface OurSpaceSection {
  title?: string;
  paragraphs: string[];
}

/**
 * Contact button configuration
 */
export interface ContactButton {
  label?: string;
  url?: string;
}

/**
 * Our Space screen props
 */
export interface OurSpaceScreenProps {
  header: OurSpaceHeader;
  gallery: string[];
  section: OurSpaceSection;
  address?: string;
  hours?: string;
  contact?: ContactButton;
}
