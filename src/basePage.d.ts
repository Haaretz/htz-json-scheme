import {
  Content,
  TaxonomyItem,
  BaseSlots,
} from './base';

/**
 * The hierarchical lineage of a page
 */
type Lineage = TaxonomyItem[];


/**
 * The types of pages in the system
 */
export type PageType =
  'article' |
  'articleMagazine' |
  'articleLiveBlog' |
  'articleRecipe' |
  'articleInterview' |
  'articleReviewResturant' |
  'articleReviewMovie' |
  'articleReviewBook' |
  'articleCards' |

  'venue' |
  'event' |

  'homepage' |
  'section' |
  'listings' |
  'tag' |
  'search' |
  'searchMouse' |

  'interactive';

/**
 * All relevant metadata pertaining to a page
 */
interface SeoData {
  /** Content for the `<title>` element */
  metaTitle: string;
  /** Content for the `<meta name="description">` element */
  metaDescription: string;
  /** Content for the `<meta name="keywords">` element */
  metaKeywords: string[];
  /** The a page's canonical url */
  canonicalLink: string;
  /**
   * The cloudinary id of an image to be used for SEO and social purposes.
   */
  metaImage: string; // The cloudinary image ID
  /** The title to be used by social media sites */
  socialTitle: string;
  /** The description to be used by social media sites */
  socialDescription: string;
  /** The title to be used by Outbrain When syndicating our content */
  obTitle?: string;
}

/**
 * The structure of a basic page.
 *
 * **Not for direct use**
 */
export interface BasePage extends Content {
  /** The page's page type */
  pageType: PageType;
  /** The pages lineage, i.e., as in breadcrumbs */
  lineage: Lineage;
  /** SEO data pertaining to the site */
  seoData: SeoData;
  /** The slots in the page */
  slots: BaseSlots;
}
