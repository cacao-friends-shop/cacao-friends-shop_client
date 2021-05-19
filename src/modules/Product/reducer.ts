import { createReducer } from 'typesafe-actions';
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
} from './actions';
import { ProductsAction, ProductState } from '../../types/Product';
import { asyncState } from 'utils/reducerUtils';

const initialState: ProductState = {
  products: {
    ryan: asyncState.initial(),
    apitch: asyncState.initial(),
    muzi: asyncState.initial(),
    prodo: asyncState.initial(),
    neo: asyncState.initial(),
  },
  product: asyncState.initial(),
};

const productsReducer = createReducer<ProductState, ProductsAction>(
  initialState,
  {
    [GET_PRODUCTS]: (state, action) => ({
      ...state,
      products: {
        ...state.products,
        [action.meta]: asyncState.load(),
      },
    }),
    [GET_PRODUCTS_SUCCESS]: (state, action) => ({
      ...state,
      products: {
        ...state.products,
        [action.meta]: asyncState.success(action.payload),
      },
    }),
    [GET_PRODUCTS_ERROR]: (state, action) => ({
      ...state,
      products: {
        ...state.products,
        [action.meta]: asyncState.error(action.payload),
      },
    }),
    [GET_PRODUCT]: state => ({
      ...state,
      product: asyncState.load(),
    }),
    [GET_PRODUCT_SUCCESS]: (state, action) => ({
      ...state,
      product: asyncState.success(action.payload),
    }),
    [GET_PRODUCT_ERROR]: (state, action) => ({
      ...state,
      product: asyncState.error(action.payload),
    }),
  }
);

export default productsReducer;
