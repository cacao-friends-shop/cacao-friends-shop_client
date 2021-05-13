import { createReducer } from 'typesafe-actions';
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_ERROR,
  LOAD_MORE_PRODUCTS_SUCCESS,
} from './actions';
import { ProductsAction, ProductState } from '../../types/Product';

const initialState: ProductState = {
  products: {
    loading: false,
    data: null,
    error: null,
  },
  product: {
    loading: false,
    data: null,
    error: null,
  },
};

const productsReducer = createReducer<ProductState, ProductsAction>(
  initialState,
  {
    [GET_PRODUCTS]: state => ({
      ...state,
      products: {
        loading: true,
        data: null,
        error: null,
      },
    }),
    [GET_PRODUCTS_SUCCESS]: (state, action) => ({
      ...state,
      products: {
        loading: false,
        data: action.payload,
        error: null,
      },
    }),
    [GET_PRODUCTS_ERROR]: (state, action) => ({
      ...state,
      products: {
        loading: false,
        data: null,
        error: action.payload,
      },
    }),
    [GET_PRODUCT]: state => ({
      ...state,
      product: {
        loading: true,
        data: null,
        error: null,
      },
    }),
    [GET_PRODUCT_SUCCESS]: (state, action) => ({
      ...state,
      product: {
        loading: false,
        data: action.payload,
        error: null,
      },
    }),
    [GET_PRODUCT_ERROR]: (state, action) => ({
      ...state,
      product: {
        loading: false,
        data: null,
        error: action.payload,
      },
    }),
    [LOAD_MORE_PRODUCTS]: state => ({
      ...state,
      products: {
        ...state.products,
        loading: true,
      },
    }),
    [LOAD_MORE_PRODUCTS_SUCCESS]: (state, action) => {
      if (!state.products.data) return state;
      return {
        ...state,
        products: {
          loading: false,
          data: {
            ...state.products.data,
            content: state.products.data.content.concat(action.payload),
          },
          error: null,
        },
      };
    },
    [LOAD_MORE_PRODUCTS_ERROR]: (state, action) => ({
      ...state,
      product: {
        loading: false,
        data: null,
        error: action.payload,
      },
    }),
  }
);

export default productsReducer;
