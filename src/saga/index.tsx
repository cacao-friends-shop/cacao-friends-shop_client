import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import productSaga from 'modules/Product/saga';
import productsReducer from '../modules/Product/reducer';
import cartsReducer, { cartsSaga } from 'modules/cart/actions';
import favoriteProductsSaga from 'modules/favorite/saga';
import favoriteReducer from 'modules/favorite/reducer';

export function* rootSaga() {
  yield all([productSaga(), favoriteProductsSaga(), cartsSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

const rootReducers = combineReducers({
  product: productsReducer,
  favorite: favoriteReducer,
  carts: cartsReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
