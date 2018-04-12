/**
 * A basic content object.
 * Not for direct use.
 */
export interface Content {
  /** The name of the content type, e.g., `'youtubeVideoEmbed'` */
  inputTemplate: string;
  /** A unique content id */
  contentId: string;
  /**
   * The content's instance name
   * Will often be used as the title of a `Content` item,
   * for instance an `Author`'s name or an `Articls`'s title.
   */
  contentName?: string;
}


/**
 * An object used in the classification of other objects
 */
export interface TaxonomyItem {
  /** The name of the TaxonomyItem */
  name: string;
  /** The URL associated with the TaxonomyItem */
  url: string;
  /** A paritial URL segment associated with the TaxonomyItem */
  pathSegment: string;
  /** The uniq content id of the TaxonomyItem */
  contentId: string;
}


/**
 * A map of slots.
 * Not for direct use.
 */
export interface BaseSlots {
  [slotName: string]: Content[];
}


/**
 * A list of content items.
 */
export interface List extends Content {
  /** The list's name */
  view: string;
  /** The List's title. Describes the content it contains. E.g., "הכתבות הנקראות באתר" */
  title?: string;
  /** A URL associated with the list, will commonly direct to a section-page */
  url?: string;
  /** Text to be inserted as a link to the list's `url`. Only relevant in certain lists. */
  urlDescription?: string;
  /** Indicates if the list is paginated. */
  hasPagination: boolean;
  /** The list's content items */
  items: TeaserData[];
}

/**
 * TeaserData is a common interface for describing different types of Polopoly content(Articles, Teasers, mouse-site object, blogs)
 */
export interface TeaserData {
  /** The content id of the represented content **/
  contentId: string;
  /** The url of the represented content **/
  path: string;
  /** The title of the represented content **/
  title: string;
  /** The mobile-title of the represented content **/
  titleMobile: string;
  /** The subtitle of the represented content **/
  subtitle?: string;
  /** The mobile subtitle of the represented content **/
  subtitleMobile?: string;
  /** The exclusive(kicker) of the represented content **/
  exclusive?: string;
  /** The mobile exclusive(kicker) of the represented content **/
  exclusiveMobile?: string;
  /** The hash code for viewing premium content **/
  hash?: string;
  /** flag indicating if the content is premium content **/
  isPremiumContent?: boolean;
  /** The lead text from represented content **/
  leadText?: string;
  /** The comment conut for content **/
  commentsCount?: number;
  /** The first-paragraph from the represented content **/
  firstParagraph?: string;
  /** The image for teaser **/
  image?: Image;
  /** The publishing date of the represented content **/
  publishDate?: number;
  /** The last-update date of the represented content **/
  lastUpdateDate?: number;
  /** The authors list of the represented content **/
  authors?: (Author|string)[];
  /** The image of the first author from the authors list of the represented content **/
  authorImage?: Image;
  /** The reporting-from value from represented content **/
  reportingFrom?: string;
  /** flags object represent the available media-types inside the represented content (video, gallery, etc') **/
  mediaFlags?: MediaFlags;
  /** A list of related-content to the represented content **/
  relatedArticles?: TeaserData[];
  /** Used for ordering event-tickets (mouse-site) **/
  tixwise?: Object;
}

/** MediaFlags represent the type of media that a content contains. **/
export interface MediaFlags {
  image?: boolean;
  video?: boolean;
  html_embed?: boolean;
  gallery?: boolean;
}

/** Data about an individual image in an `imgArray` */
export interface ImgArrayItem {
  imgName: string;
  /** The cloudinaryVersion of the image */
  version: string;
}


/**
 * An image object
 */
export interface Image extends Content {
  /** Text used for describing the image to non-sighted users */
  alt: string;
  /** Image Text: the text used  as part of the image's caption */
  description?: string;
  /** The image's credit information */
  credit?: string;
  /** The object should have keys representing aspect names (belgrade|landscape|headline|regular|square|vertical|full), each an aspect object, with the following keys:
   * { width, height, x, y } */
  aspects?: {
    belgrade?: Aspect;
    landscape?: Aspect;
    headline?: Aspect;
    regular?: Aspect;
    square?: Aspect;
    vertical?: Aspect;
    full?: Aspect;
  };
  /** Whether the image object is an animated gif */
  isAnimated: boolean;
  /** Data about each individual image asociated with the different use cases */
  imgArray: ImgArrayItem[];
  /** Text for the title attribute. Shows up as a tooltip when the mouse hovers above the image */
  imageType: "image"|"infographic";
}


/**
 * An object that represent a cropping aspect for an image
 */
export interface Aspect {
  /** The width of the image */
  width: number;
  /** The height of the image */
  height: number;
  /** The origin x coordinate for the aspect */
  x: number;
  /** The origin y coordinate for the aspect */
  y: number;

}


/**
 * An image-gallery object
 */
export interface Gallery extends Content {
  /** The gallery's title. Describes the content it contains. E.g., `"תמונות היום"` */
  title?: string;
  /** The gallery's images */
  images: Image[];
}


/**
 * An html-embed object
 */
export interface Embed extends Content {
  /**
   * The string required for generating the embed.
   * May be an id, html, etc, depending on the type
   * of the embed, which can be determined by the  `contentId`
  */
  identifier: string;
}


/**
 * Related articles
 */
export interface Related extends Content {
  /** An array of content elements to be rendered as a list of related articles */
  items: Content[];
}


/**
 * @TODO Add documentation
 */
export interface Advert extends Content {
  style: string;
  class: string;
  id: string;
  audianceTarget: string;
}


/**
 * An object containing all details of a specific author
 */
export interface Author extends Content {
  /** The URL author's author-page. */
  url: string;
  /**
   * Indicates what type of author we have in hand.
   */
  authorType: "themarker" |
    "haaretz" |
    "exterior" |
    "agencies" |
    "hct" |
    "hcr" |
    "phot" |
    "col" |
    "unknown" |
    "none";
  /** A cloudinary ID for the image associated with the pullquote */
  image: string;
  /** A URL to the author's twitter page */
  twitter: string;
  /** A URL to the author's facebook page */
  facebook: string;
  /** A URL to the author's gPlush page */
  gplus: string;
  /** A author's email address */
  email: string;
  /** Indicates if it is possible to subscribe to push and email alerts for the author */
  hasEmailAlerts: boolean;
}
