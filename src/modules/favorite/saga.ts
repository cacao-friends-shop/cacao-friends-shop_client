import { favoriteProductAsync, FAVORITE_PRODUCTS } from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';
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
    put(favoriteProductAsync.success(products));
  } catch (e) {
    put(favoriteProductAsync.failure(e));
  }
}

export default function* favoriteProductsSaga() {
  yield takeEvery(FAVORITE_PRODUCTS, getFavoriteProductsSaga);
}
