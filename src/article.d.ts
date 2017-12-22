import {
  Advert,
  Author,
  BaseSlots,
  Content,
  Embed,
  Gallery,
  Image,
  Related,
  TaxonomyItem,
} from './base';

import {
  BasePage,
  PageType,
} from './basePage';


/////////////////////
//  Content Types  //
/////////////////////

/** A key-value map of HTMLElement attributes and their values */
interface ParagraphNestedTagAttrs {
  [attr: string]: string | boolean | null;
}

/** An object describing the properties of elements nested inside a Paragraph */
interface ParagraphNestedTag {
  /** The nested element's tagname */
  tagName: string;
  /** The DOM element's attributes */
  attrs: ParagraphNestedTagAttrs;
  /** The content of the DOM element */
  content: string | null | ParagraphNestedTag | Paragraph;
}

/**
 * An array representing the elements of a paragraph so that they can
 * easily be recomposed using the correct components in the front end
 */
type Paragraph = (string | ParagraphNestedTag)[];


/** The layout position of an image inside an article's body */
type ImageLayoutPosition = 'base' | 'wide' | 'leftLeaning' | 'rightLeaning' | 'wrapped';

/**
 * An image inside an article's body.
 */
interface ImageArticleBody extends Image {
  /** The layout position of an image inside an article's body */
  imageLayoutPosition?: ImageLayoutPosition;
  /** The aspect ratio to use for drawing the image*/
  aspectRatio?: 'square' | 'regulare' | 'landscape' | 'headline' | 'vertical' | 'auto';
}

/**
 * A Pullquote element
 */
interface Pullquote extends Content {
  /** The type of the pullquote */
  pullquoteType: "default" | "hasQuote" | "hasPic";
  /** A cloudinary ID for the image associated with the pullquote */
  image?: string;
  /** The textual content of the pullquote */
  content: string;
  /** The pullquote's citation. Usually a person's name */
  citation?: string;
}


/**
 * A single liveblog element
 */
interface LiveblogItem extends Content {
  /* The title of the individual element */
  title: string;
  /* The title of the individual element to be displayed in mobile view */
  titleMobile?: string;
  /** The element's name. Used for generating a shareable anchor */
  contentName: string;
  /** A title to be used in the liveblog's `key events` list */
  keyEvent?: string;
  /** Used for creating uniq links to each liveblog element. An SEO thing */
  cardId?: string;
  /** The item's publishing date */
  pubDate: Date;
  /** The item's last modification date */
  modDate?: Date
  /**
   * An array of authors, containing either a `string`,
   * representing a name, or `Author` objects
   */
  authors?: (Author | string)[];
  /** A text indicating where an author is reporting from */
  reportingFrom?: string;
  /** The elements composing the item's body */
  body: ArticleBodyContentTypes[];
  /** Tags pertaining directly to the liveblog item */
  tags?: TaxonomyItem[];
}


///////////////////////////////
//  Slots and Content Lists  //
///////////////////////////////
/**
 * The slots structure of an article page
 */
interface ArticleSlots extends BaseSlots {
  /** A slot at the top of the page, above the masthead */
  preMasthead: Content[],
  /**
   * A slot containing the page's masthead
   *
   * @TODO Decide if this should be served exploded
   */
  masthead: Content[],
  /** A slot positioned between the masthead and the main content */
  top: Content[],
  /**
   * A slot the main page's main content
   *
   * @Note **Should be served exploded**
   */
  main: MainArticleSlot, // Exploded
  /** A slot containing the content left of the article */
  aside?: Content[],
  /** A slot positioned between the main content and the footer */
  bottom: Content[],
  /**
   * A slot containing the page's footer
   */
  siteFooter: Content[],
  /** A slot at the bottom of the page, bellow the footer */
  postSiteFooter: Content[],
}

/**
 * The page's main content slot.
 *
 * Contains the `Article` as well as any other content.
 */
type MainArticleSlot = (Article | Content)[];

/** The types of content an article body may contain */
type ArticleBodyContentTypes = (
  Paragraph |
  ImageArticleBody |
  Embed |
  Related |
  Advert
);

/////////////////////
//  Article types  //
/////////////////////
/** The contents of an article */
interface Article extends Content {
  /** The kicker of the article */
  exclusive?: string;
  /** An alternative kicker to be displayed in small viewports */
  mobileExclusive?: string;
  /** The title of the article */
  title: string;
  /** An alternative title to be displayed in small viewports */
  mobileTitle?: string;
  /** The article's subtitle */
  subtitle?: string;
  /** An alternative subtitle to be displayed in small viewports */
  mobileSubtitle?: string;
  /**
   * An array of authors, containing either a `string`,
   * representing a name, or `Author` objects
   */
  authors?: (Author | string)[];
  /** A text indicating where an author is reporting from */
  reportingFrom?: string;
  /** The article's publishing date */
  pubDate: Date;
  /** The article's last modification date */
  modDate?: Date
  /** Media to be displayed as the article's opeing figure */
  leadingMedia?: Image | Embed | Gallery;
  /** The elements composing the article's body */
  body: ArticleBodyContentTypes[];
  /** Tags pertaining to the article */
  tags?: TaxonomyItem[];
  /** The `contentId` of the of the article's comments content element */
  comments?: string;
}

/**
 * Live Blog Article
 */
interface ArticleLiveBlog extends Article {
  /** Indicate if the article is being live-updated */
  isLiveUpdate: boolean;
  /** Indicate if the update date of every card should be shown */
  showCardsDate: boolean;
  /** An SEO title to be prepended to each card's meta title */
  liveBlogMetaTitle?: string;
  /**
   * An array of `LiveBlogCard`s
   * @Note **Should be served exploded**
   */
  cards: LiveblogItem[];
}

// interface Event extends Article {
//   englishTittle?: string;
//   price?: string;
//   ages?: string;
//   genre?: string;
//   related?: string;
//   cards: LiveblogItem[];
// }


//////////////////////
//  Page Structure  //
//////////////////////
/**
 * An article page's structure
 */
interface ArticlePage extends BasePage {
  /** The article's type */
  pageType: 'article' |
    'articleMagazine' |
    'articleLiveBlog' |
    // 'articleInterview' |
    // 'articleRecipe' |
    // 'articleReviewMovie' |
    // 'articleReviewBook' |
    'event' |
    'venue'
  /** The slots in the page */
  slots: ArticleSlots;
}
