import {
  Advert,
  Author,
  BaseSlots,
  Content,
  Embed,
  Gallery,
  Image,
  Related,
  SlotElements,
  TaxonomyItem,
} from './base';

import {
  BasePage,
  PageType,
} from './basePage';


/////////////////////
//  Content Types  //
/////////////////////
type Paragraph = {
  content: 'string';
};

interface Pullquote extends Content {
  pullquoteType: "default" | "hasQuote" | "hasPic";
  image?: string; // The cloudinary image ID
  content: string;
  citation?: string;
}


interface LiveblogCard extends Content {
  title: string;
  titleMobile?: string;
  contentName: string;
  keyEvent?: string;
  cardId?: string;
  pubDate: Date;
  modDate?: Date
  author?: Author;
  reportingFrom?: string;
  credit?: string;
  content: ArticleBodyContentTypes[];
  tags?: TaxonomyItem[];
}


///////////////////////////////
//  Slots and Content Lists  //
///////////////////////////////
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

interface MainArticleSlot extends SlotElements {
  0: Article;
  [index: number]: Content;
  // [index: number]: ArticleContent;
  // [index: number]?: Content;
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


/////////////////////
//  Article types  //
/////////////////////
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
  // Is the article still being live updated
  isLiveUpdate: boolean;
  // Show the update date of every card
  ShowCardsDate: boolean;
  // SEO title to be prepended to each card's meta title
  liveBlogMetaTitle?: string;
  cards: LiveblogCard[];
}


//////////////////////
//  Page Structure  //
//////////////////////
interface ArticlePage extends BasePage {
  pageType: 'article' |
    'articleMagazine' |
    'articleLiveBlog' |
    // 'articleInterview' |
    // 'articleRecipe' |
    // 'articleReviewMovie' |
    // 'articleReviewBook' |
    'event' |
    'venue'
  slots: ArticleSlots;
}
