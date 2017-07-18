import { Content } from './base';
import { BasePage, BaseSlots, SlotElements, PageType, } from './basePage';

interface ArticleSlots extends BaseSlots {
  preMasthead: SlotElements,
  masthead: SlotElements,
  top: SlotElements,
  main: MainArticleSlot,
  aside: SlotElements,
  bottom: SlotElements,
  siteFooter: SlotElements,
  postSiteFooter: SlotElements,
}

type Author = { }

enum BodyContentTypes {
  Paragraph,
  Image,
  Embed,
  Related,
  Advert,
  // ...
}

type BodyContent = BodyContentTypes[];

interface ArticleContent extends Content {
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
  modDate?: Date
  body: BodyContent;
}

interface MainArticleSlot extends SlotElements {
  0: ArticleContent;
  [index: number]: Content;
  // [index: number]: ArticleContent;
  // [index: number]?: Content;
}

interface ArticlePage extends BasePage {
  pageType: PageType;
  slots: ArticleSlots;
  // slots: {
  //   main: [
  //   ],
  //   aside: []
  // }
}
