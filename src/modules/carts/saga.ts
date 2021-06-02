import * as cartsApi from 'apis/cart';
import { Carts } from 'types/Carts';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getCarts, getCartsError, getCartsSuccess } from './cartsSlice';

function* getCartsSaga() {
  try {
    const carts: Carts[] = yield call(cartsApi.getCarts);
    yield put(getCartsSuccess(carts));
  } catch (e) {
    yield put(getCartsError(e));
  }
}

export default function* cartsSaga() {
  yield takeEvery(getCarts.type, getCartsSaga);
}
