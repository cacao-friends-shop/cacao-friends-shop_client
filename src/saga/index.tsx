import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import productSaga from 'modules/Product/saga';
import productsReducer from '../modules/Product/reducer';
import postsReducer from 'modules/posts/postsSlice';
import { postsSaga } from 'modules/posts/sagas';
import cartsReducer, { cartsSaga } from 'modules/cart/actions';
import favoriteProductsSaga from 'modules/favorite/saga';
import favoriteReducer from 'modules/favorite/reducer';

export function* rootSaga() {
  yield all([productSaga(), postsSaga(), favoriteProductsSaga(), cartsSaga()]);
}

const rootReducers = combineReducers({
  product: productsReducer,
  posts: postsReducer,
  favorite: favoriteReducer,
  carts: cartsReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
