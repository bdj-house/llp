import type {
  SanityAsset,
  SanityBlock,
  SanityDocument,
  SanityFile,
  SanityGeoPoint,
  SanityImage,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageDimensions,
  SanityImageHotspot,
  SanityImageMetadata,
  SanityImagePalette,
  SanityImagePaletteSwatch,
  SanityKeyed,
  SanityKeyedReference,
  SanityReference,
} from 'sanity-codegen';

export type {
  SanityAsset,
  SanityBlock,
  SanityDocument,
  SanityFile,
  SanityGeoPoint,
  SanityImage,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageDimensions,
  SanityImageHotspot,
  SanityImageMetadata,
  SanityImagePalette,
  SanityImagePaletteSwatch,
  SanityKeyed,
  SanityKeyedReference,
  SanityReference,
};

/**
 * Página Sobre
 *
 *
 */
export interface AboutPage extends SanityDocument {
  _type: 'aboutPage';

  /**
   * Título — `string`
   *
   *
   */
  title?: string;

  /**
   * Subtítulo — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Imagem de Perfil — `image`
   *
   *
   */
  profileImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Conteúdo Principal — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Artigo
 *
 *
 */
export interface Article extends SanityDocument {
  _type: 'article';

  /**
   * Título — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Data de Publicação — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Resumo — `text`
   *
   *
   */
  excerpt?: string;

  /**
   * Imagem de Capa — `image`
   *
   *
   */
  coverImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Conteúdo — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Autor — `string`
   *
   *
   */
  author?: string;

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyed<string>>;
}

export type Documents = AboutPage | Article;
