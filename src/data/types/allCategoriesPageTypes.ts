export type AllWpCategoriesPageType = {
  [key: string]: any;
  id: string | number;
  name: string;
  slug: string;
  description: string;
};

export interface AllCategoriesType extends AllWpCategoriesPageType {
  [key: string]: any;
  image: string;
}
