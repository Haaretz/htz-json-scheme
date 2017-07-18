export type Content = {
  inputTemplate: string;
  contentId: string;
  contentName?: string;
  [fieldName: string]: any;
}

export type TaxonomyItem = {
  name: string;
  url: URL;
}
