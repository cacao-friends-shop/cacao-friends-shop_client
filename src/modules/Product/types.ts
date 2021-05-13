import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
export type Product = {
  id: number;
  title: string;
  price: string;
  characterType: string;
  thumbnailImageUrl: string;
  soldCount: number;
  detailPageImageUrls: string[];
};

export type Products = Product[];

export type ProductsAction = ActionType<typeof actions>;

export type ProductState = {
  products: {
    loading: boolean;
    data: Products | null;
    error: Error | null;
  };
  product: {
    loading: boolean;
    data: Product | null;
    error: Error | null;
  };
};
