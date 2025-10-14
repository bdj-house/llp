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
 * Página Inicial
 *
 *
 */
export interface HomePage extends SanityDocument {
  _type: 'homePage';

  /**
   * Logo — `image`
   *
   *
   */
  heroLogo?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Título — `string`
   *
   *
   */
  heroTitle?: string;

  /**
   * Subtítulo — `text`
   *
   *
   */
  heroSubtitle?: string;

  /**
   * Imagem Principal — `image`
   *
   *
   */
  mainImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Sobre
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
   * Descrição — `string`
   *
   *
   */
  description?: string;

  /**
   * Associadas — `array`
   *
   *
   */
  associates?: Array<SanityKeyedReference<Associate>>;
}

/**
 * Associadas
 *
 *
 */
export interface Associate extends SanityDocument {
  _type: 'associate';

  /**
   * Nome — `string`
   *
   *
   */
  name?: string;

  /**
   * Cargo — `string`
   *
   *
   */
  role?: string;

  /**
   * Descrição breve — `text`
   *
   *
   */
  description?: string;

  /**
   * Formação — `string`
   *
   *
   */
  graduation?: string;

  /**
   * História — `text`
   *
   *
   */
  history?: string;

  /**
   * Imagem de Capa — `image`
   *
   *
   */
  imageCover?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Imagem de Perfil (modal) — `image`
   *
   *
   */
  imageProfile?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * E-mail — `string`
   *
   *
   */
  email?: string;

  /**
   * LinkedIn URL — `url`
   *
   *
   */
  linkedin?: string;

  /**
   * WhatsApp URL — `url`
   *
   *
   */
  whatsapp?: string;

  /**
   * Ordem — `number`
   *
   *
   */
  order?: number;

  /**
   * Ativa — `boolean`
   *
   *
   */
  active?: boolean;
}

/**
 * Área de Atuação
 *
 *
 */
export interface OperationArea extends SanityDocument {
  _type: 'operationArea';

  /**
   * Título — `string`
   *
   *
   */
  title?: string;

  /**
   * Categoria — `string`
   *
   *
   */
  category?:
    | 'TODOS'
    | 'CIVIL'
    | 'TRABALHO'
    | 'PREVIDÊNCIA'
    | 'FAMÍLIA'
    | 'CONSUMIDOR'
    | 'CONTRATOS'
    | 'CRIMINAL'
    | 'EMPRESARIAL';

  /**
   * Imagem — `image`
   *
   *
   */
  image?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Conteúdo Detalhado — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Ordem de Exibição — `number`
   *
   * Número para ordenar as áreas (menor número aparece primeiro)
   */
  order?: number;
}

/**
 * Artigos
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
   * Link do Artigo — `string`
   *
   *
   */
  sourceLink?: string;

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

/**
 * Nosso Espaço
 *
 *
 */
export interface OurSpacePage extends SanityDocument {
  _type: 'ourSpacePage';

  /**
   * Título — `string`
   *
   *
   */
  headerTitle?: string;

  /**
   * Subtítulo — `string`
   *
   *
   */
  headerSubtitle?: string;

  /**
   * Descrição do topo — `text`
   *
   *
   */
  headerSubject?: string;

  /**
   * Galeria — `array`
   *
   *
   */
  gallery?: Array<
    SanityKeyed<{
      _type: 'image';
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;

  /**
   * Título da seção — `string`
   *
   *
   */
  sectionTitle?: string;

  /**
   * Parágrafos — `array`
   *
   *
   */
  sectionParagraphs?: Array<SanityKeyed<string>>;

  /**
   * Endereço — `string`
   *
   *
   */
  address?: string;

  /**
   * Horário de atendimento — `string`
   *
   *
   */
  hours?: string;

  /**
   * Rótulo botão contato — `string`
   *
   *
   */
  contactButtonLabel?: string;

  /**
   * URL botão contato — `url`
   *
   *
   */
  contactButtonUrl?: string;
}

/**
 * Configurações do Site
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings';

  /**
   * Nome do site — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Telefone — `string`
   *
   *
   */
  phone?: string;

  /**
   * Horário de atendimento — `string`
   *
   *
   */
  businessHours?: string;

  /**
   * Endereço — `object`
   *
   *
   */
  address?: {
    _type: 'address';
    /**
     * Rua — `string`
     *
     *
     */
    street?: string;

    /**
     * Cidade — `string`
     *
     *
     */
    city?: string;

    /**
     * Estado — `string`
     *
     *
     */
    state?: string;

    /**
     * CEP — `string`
     *
     *
     */
    postalCode?: string;

    /**
     * País — `string`
     *
     *
     */
    country?: string;
  };

  /**
   * Redes Sociais — `object`
   *
   *
   */
  social?: {
    _type: 'social';
    /**
     * Facebook — `url`
     *
     *
     */
    facebook?: string;

    /**
     * LinkedIn — `url`
     *
     *
     */
    linkedin?: string;

    /**
     * Instagram — `url`
     *
     *
     */
    instagram?: string;
  };

  /**
   * SEO — `object`
   *
   *
   */
  seo?: {
    _type: 'seo';
    /**
     * Título — `string`
     *
     *
     */
    title?: string;

    /**
     * Descrição — `text`
     *
     *
     */
    description?: string;

    /**
     * Palavras-chave — `array`
     *
     *
     */
    keywords?: Array<SanityKeyed<string>>;

    /**
     * Imagem OpenGraph — `image`
     *
     *
     */
    openGraphImage?: {
      _type: 'image';
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    };
  };

  /**
   * URL do Mapa (Google Maps Embed) — `url`
   *
   *
   */
  googleMapUrl?: string;
}

export type Documents =
  | HomePage
  | AboutPage
  | Associate
  | OperationArea
  | Article
  | OurSpacePage
  | SiteSettings;
