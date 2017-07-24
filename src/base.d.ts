export type Content = {
  inputTemplate: string;
  contentId: string;
  contentName?: string;
  [fieldName: string]: any;
}

export type TaxonomyItem = {
  name: string;
  url: string;
  pathSegment: string;
  contentId: string;
}

export type SlotElements = Content[];

export type BaseSlots = {
  [slotName: string]: SlotElements
};

export interface List extends Content {
  view: 'string';
  title: string;
  url?: string;
  urlDescription?: string
  hasPagination: boolean;
  items: Content[];
}

export interface Image extends Content {
  alt: string;
  caption?: string;
  credit: string;
  image: string; // The cloudinary image ID
  imagePosition: string; // The cloudinary image ID
  title?: string;
}

export interface Gallery extends Content {
  title?: string;
  images: Image[];
}

export interface Embed extends Content {
  embedType: string;
  identifier: string;
}

export interface Related extends Content {
  items: Content[];
}

export interface Advert extends Content {
  style: string;
  class: string;
  id: string;
  audianceTarget: string;
}

export interface Author extends Content {
  name: string;
  url: string;
  // TODO: Check authorTypes
  authorType: "htz" | "hdc" | "tm" | "blogger" | "guest";
  image: string; // The cloudinary image ID
  twitter: string;
  facebook: string;
  gplus: string;
  email: string;
  hasEmailAlerts: boolean;
  // hasPushAlerts: boolean;
}
