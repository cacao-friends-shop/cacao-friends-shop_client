import { AxiosError } from 'axios';

import { createAsyncAction } from 'typesafe-actions';
import { Product, ProductData, Products } from '../../types/Product';

export const GET_PRODUCTS = 'product/GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'product/GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'product/GET_PRODUCTS_ERROR';

export const GET_PRODUCT = 'product/GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'product/GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'product/GET_PRODUCT_ERROR';

export const LOAD_MORE_PRODUCTS = 'product/LOAD_MORE_PRODUCTS';
export const LOAD_MORE_PRODUCTS_SUCCESS = 'product/LOAD_MORE_PRODUCTS_SUCESS';
export const LOAD_MORE_PRODUCTS_ERROR = 'product/LOAD_MORE_PRODUCTS_ERROR';

export const productsAsync = createAsyncAction(
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
)<undefined, ProductData, AxiosError>();

export const productAsync = createAsyncAction(
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR
)<number, Product, AxiosError>();

export const loadMoreProductAsync = createAsyncAction(
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_ERROR
)<number, Products, AxiosError>();
