import {
  Content,
  TaxonomyItem,
  SlotElements,
  BaseSlots,
} from './base';

/**
 * The hierarchical lineage of a page
 */
type Lineage = TaxonomyItem[];

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

type SeoData = {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  canonicalLink: string;
  metaImage: string; // The cloudinary image ID
  socialTitle: string;
  socialDescription: string;
  obTitle?: string;
}

export type BasePage = {
  pageType: PageType;
  lineage: Lineage;
  seoData: SeoData;
  slots: BaseSlots;
}
