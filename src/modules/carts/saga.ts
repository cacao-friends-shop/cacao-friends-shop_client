import * as cartsApi from 'apis/cart';
import { Carts } from 'types/Carts';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  getCarts,
  getCartsError,
  getCartsSuccess,
  addCarts,
  addCartsError,
  addCartsSuccess,
  deleteCarts,
  deleteCartsSuccess,
  deleteCartsError,
} from './cartsSlice';

function* getCartsSaga() {
  try {
    const carts: Carts[] = yield call(cartsApi.getCarts);
    yield put(getCartsSuccess(carts));
  } catch (e) {
    yield put(getCartsError(e));
  }
}

function* addCartsSaga(action: ReturnType<typeof addCarts>) {
  try {
    yield call(cartsApi.addCartItem, action.payload.id, action.payload.amount);
    const carts: Carts[] = yield call(cartsApi.getCarts);
    yield put(addCartsSuccess());
    yield put(getCartsSuccess(carts));
  } catch (e) {
    yield put(addCartsError(e));
  }
}

function* deleteCartSaga(action: ReturnType<typeof deleteCarts>) {
  try {
    yield call(cartsApi.deleteCartItem, action.payload);
    const carts: Carts[] = yield call(cartsApi.getCarts);
    yield put(deleteCartsSuccess());
    yield put(getCartsSuccess(carts));
  } catch (e) {
    yield put(deleteCartsError(e));
  }
}

export default function* cartsSaga() {
  yield takeEvery(getCarts.type, getCartsSaga);
  yield takeLatest(addCarts.type, addCartsSaga);
  yield takeLatest(deleteCarts.type, deleteCartSaga);
}
