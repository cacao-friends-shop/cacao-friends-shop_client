import {
  favoriteProductAsync,
  FAVORITE_PRODUCTS,
  loadMoreProductAsync,
  LOAD_MORE_PRODUCTS,
} from './actions';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getFavoriteProducts } from '../../apis/products/index';
import { ProductData } from 'types/Product';

function* getFavoriteProductsSaga(
  action: ReturnType<typeof favoriteProductAsync.request>
) {
  try {
    const products: ProductData = yield call(
      getFavoriteProducts,
      action.payload
    );
    yield put(favoriteProductAsync.success(products));
  } catch (e) {
    yield put(favoriteProductAsync.failure(e));
  }
}

function* getLoadMoreSaga(
  action: ReturnType<typeof loadMoreProductAsync.request>
) {
  const page = action.payload;
  try {
    const contents: ProductData = yield call(getFavoriteProducts, page);

    yield put(loadMoreProductAsync.success(contents.content));
  } catch (e) {
    yield put(loadMoreProductAsync.failure(e));
  }
}

export default function* favoriteProductsSaga() {
  yield takeEvery(FAVORITE_PRODUCTS, getFavoriteProductsSaga);
  yield takeLatest(LOAD_MORE_PRODUCTS, getLoadMoreSaga);
}
