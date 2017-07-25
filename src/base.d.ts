/**
 * A basic content object.
 * Not for direct use.
 */
export interface Content {
  /** The name of the content type, e.g., `'youtubeVideoEmbed'` */
  inputTemplate: string;
  /** A unique content id */
  contentId: string;
  /** The content's instance name */
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
  urlDescription?: string
  /** Indicates if the list is paginated. */
  hasPagination: boolean;
  /** The list's content items */
  items: Content[];
}


/**
 * An image object
 */
export interface Image extends Content {
  /** Text used for describing the image to non-sighted users */
  alt: string;
  /** The text used  as the imags's caption */
  caption?: string;
  /** The image's credit information */
  credit: string;
  /** A cloudinary ID */
  image: string;
  /** Text for the title attribute. Shows up as a tooltip when the mouse hovers above the image */
  title?: string;
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
  /** The author's name */
  name: string;
  /** The URL author's author-page. */
  url: string;
  /**
   * Indicates what type of author we have in hand.
   *
   * @TODO: Check that authorType options indeed correctly correlate
   */
  authorType: "htz" | "hdc" | "tm" | "blogger" | "guest";
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
  /** Indicates if it is possible to subscribe to email alerts for the author */
  hasEmailAlerts: boolean;
  /** Indicates if it is possible to subscribe to push alerts for the author */
  hasPushAlerts: boolean;
}
