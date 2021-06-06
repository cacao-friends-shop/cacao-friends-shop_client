import * as productsApi from 'apis/products';
import { Product, ProductData } from '../../types/Product';
import { put, call, takeEvery } from 'redux-saga/effects';
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  productAsync,
  productsAsync,
} from './actions';

function* getProductsSaga(action: ReturnType<typeof productsAsync.request>) {
  try {
    const products: ProductData = yield call(
      productsApi.getProducts,
      action.payload
    );
    yield put(productsAsync.success(products, action.meta));
  } catch (e) {
    yield put(productsAsync.failure(e, action.meta));
  }
}

function* getProductSaga(action: ReturnType<typeof productAsync.request>) {
  const id = action.payload;
  try {
    const product: Product = yield call(productsApi.getProductById, id);
    yield put(productAsync.success(product));
  } catch (e) {
    yield put(productAsync.failure(e));
  }
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
  yield takeEvery(GET_PRODUCT, getProductSaga);
}
