import * as productsApi from 'apis/products';
import { Product, ProductData, Products } from '../../types/Product';
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  loadMoreProductAsync,
  LOAD_MORE_PRODUCTS,
  productAsync,
  productsAsync,
} from './actions';

function* getProductsSaga() {
  try {
    const products: ProductData = yield call(productsApi.getProducts);
    yield put(productsAsync.success(products));
  } catch (e) {
    yield put(productsAsync.failure(e));
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

function* getNextPageSaga(
  action: ReturnType<typeof loadMoreProductAsync.request>
) {
  const page = action.payload;
  try {
    const contents: Products = yield call(productsApi.getNextPage, page);

    yield put(loadMoreProductAsync.success(contents));
  } catch (e) {
    yield put(loadMoreProductAsync.failure(e));
  }
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
  yield takeEvery(GET_PRODUCT, getProductSaga);
  yield takeLatest(LOAD_MORE_PRODUCTS, getNextPageSaga);
}
