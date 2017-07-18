import { Content, TaxonomyItem } from './base';

type Lineage = TaxonomyItem[];

export enum PageType {
  article,
  articleMagazine,
  articleLiveBlog,
  articleRecipe,
  articleReviewMovie,
  articleReviewBook,
  articleCards,

  venue,
  event,

  homepage,
  section,
  listings,
  tag,
  search,
  searchMouse,

  interactive,
}

export type SlotElements = Content[];

export type BaseSlots = {
  [slotName: string]: SlotElements
};

type SeoData = {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  canonicalLink: URL;
  ogTitle: string;
  ogDescription: string;
  ogImages: URL[];
  obTitle: string;
}

export type BasePage = {
  pageType: PageType;
  lineage: Lineage;
  seoData: SeoData;
  slots: BaseSlots;
}
