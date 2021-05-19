import { ActionType } from 'typesafe-actions';
import * as actions from '../../modules/Product/actions';
export type Product = {
  id: number;
  title: string;
  price: string;
  characterType: string;
  thumbnailImageUrl: string;
  soldCount: number;
  detailPageImageUrls: string[];
};

export type ProductData = {
  content: Product[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  sort: Sort;
  empty: boolean;
};

export type Pageable = {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};

export type Sort = {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};

export type Products = Product[];

export type ProductsAction = ActionType<typeof actions>;

export type ProductsState = {
  [key: string]: {
    loading: boolean;
    data: ProductData | null;
    error: Error | null;
  };
};

export type ProductState = {
  products: ProductsState;
  product: {
    loading: boolean;
    data: Product | null;
    error: Error | null;
  };
};
