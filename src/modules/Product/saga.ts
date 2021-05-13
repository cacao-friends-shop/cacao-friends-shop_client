import { getProductById, getProducts } from 'apis/products';
import axios from 'axios';
import { Product, Products, ProductsAction } from './types';
import { put, call, takeEvery } from 'redux-saga/effects';
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  productAsync,
  productsAsync,
} from './actions';

function* getProductsSaga() {
  try {
    const products: Products = yield call(getProducts);
    yield put(productsAsync.success(products));
  } catch (e) {
    yield put(productsAsync.failure(e));
  }
}

function* getProductSaga(action: ReturnType<typeof productAsync.request>) {
  const id = action.payload;
  try {
    const product: Product = yield call(getProductById, id);
    yield put(productAsync.success(product));
  } catch (e) {
    yield put(productAsync.failure(e));
  }
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
  yield takeEvery(GET_PRODUCT, getProductSaga);
}
