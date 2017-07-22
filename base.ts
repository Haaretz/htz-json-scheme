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
};
