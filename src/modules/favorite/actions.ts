import { AxiosError } from 'axios';
import { ProductData, Products } from 'types/Product';
import { createAsyncAction } from 'typesafe-actions';

export const FAVORITE_PRODUCTS = 'favorite/FAVORITE_PRODUCTS';
export const FAVORITE_PRODUCTS_SUCCESS = 'favorite/FAVORITE_PRODUCTS_SUCCESS';
export const FAVORITE_PRODUCTS_ERROR = 'favorite/FAVORITE_PRODUCTS_ERROR';

export const LOAD_MORE_PRODUCTS = 'favorite/LOAD_MORE_PRODUCTS';
export const LOAD_MORE_PRODUCTS_SUCCESS = 'favorite/LOAD_MORE_PRODUCTS_SUCESS';
export const LOAD_MORE_PRODUCTS_ERROR = 'favorite/LOAD_MORE_PRODUCTS_ERROR';

export const favoriteProductAsync = createAsyncAction(
  FAVORITE_PRODUCTS,
  FAVORITE_PRODUCTS_SUCCESS,
  FAVORITE_PRODUCTS_ERROR
)<number, ProductData, AxiosError>();

export const loadMoreProductAsync = createAsyncAction(
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_ERROR
)<number, Products, AxiosError>();
