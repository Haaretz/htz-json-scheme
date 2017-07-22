import { Content, TaxonomyItem, } from './base';
import {
  BasePage,
  BaseSlots,
  SlotElements,
  PageType,
} from './basePage';

interface ArticleSlots extends BaseSlots {
  preMasthead: SlotElements,
  masthead: SlotElements,
  top: SlotElements,
  main: MainArticleSlot, // Exploded
  aside?: SlotElements,
  bottom: SlotElements,
  siteFooter: SlotElements,
  postSiteFooter: SlotElements,
}

interface Author extends Content {
  name: string;
  url: string;
  // TODO: Check types
  authorType: "htz" | "hdc" | "tm" | "blogger" | "guest";
  image: string; // The cloudinary image ID
  twitter: string;
  facebook: string;
  gplus: string;
  email: string;
  hasEmailAlerts: boolean;
  // hasPushAlerts: boolean;
};

type Paragraph = {
  content: 'string';
};

interface Pullquote extends Content {
  pullquoteType: "default" | "hasQuote" | "hasPic";
  image?: string; // The cloudinary image ID
  content: string;
  citation?: string;
}
interface Image extends Content {
  alt: string;
  caption?: string;
  credit: string;
  image: string; // The cloudinary image ID
  imagePosition: string; // The cloudinary image ID
  title?: string;
};
interface Gallery extends Content {
  title?: string;
  images: Image[];
};
interface Embed extends Content {
  embedType: string;
  identifier: string;
};
interface Related extends Content {
  items: Content[];
};
interface Advert extends Content {
  style: string;
  class: string;
  id: string;
  audianceTarget: string;
};
interface LiveblogCard extends Content {
  title: string;
  titleMobile?: string;
  contentName: string;
  keyEvent?: string;
  cardId?: string;
  pubDate: Date;
  modDate?: Date
  content: ArticleBodyContentTypes[];
  tags?: TaxonomyItem[];
}

type ArticleBodyContentTypes = {
  [index: number]:
    Paragraph |
    Image |
    Embed |
    Related |
    Advert
}

type ArticleBodyContent = ArticleBodyContentTypes[];

interface Article extends Content {
  exclusive?: string;
  mobileExclusive?: string;
  title: string;
  mobileTitle?: string;
  subtitle?: string;
  mobileSubtitle?: string;
  authors?: Author[];
  credit?: string;
  reportingFrom?: string;
  pubDate: Date;
  leadingMedia?: Image | Embed | Gallery;
  body: ArticleBodyContent;
  modDate?: Date
  tags?: TaxonomyItem[];
  comments?: string; // The comments' contentId
}

interface ArticleLiveBlog extends Article {
  isLiveUpdate: boolean;
  ShowCardsDate: boolean;
  liveBlogMetaTitle?: string;
  cards: LiveblogCard[];
}

interface MainArticleSlot extends SlotElements {
  0: Article;
  [index: number]: Content;
  // [index: number]: ArticleContent;
  // [index: number]?: Content;
}

interface ArticlePage extends BasePage {
  pageType: 'article' |
    'articleMagazine' |
    'articleLiveBlog' |
    'articleRecipe' |
    'articleReviewMovie' |
    'articleReviewBook';
  slots: ArticleSlots;
}
