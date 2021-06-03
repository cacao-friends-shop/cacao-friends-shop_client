import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import userReducer from 'modules/User/reducer';
import { userSaga } from 'modules/User/saga';
import productSaga from 'modules/Product/saga';
import productsReducer from './Product/reducer';
import postsReducer from 'modules/posts/postsSlice';
import { postsSaga } from 'modules/posts/sagas';
import favoriteProductsSaga from 'modules/favorite/saga';
import favoriteReducer from 'modules/favorite/reducer';
import cartsReducer from 'modules/carts/cartsSlice';
import cartsSaga from './carts/saga';

export function* rootSaga() {
  yield all([
    favoriteProductsSaga(),
    cartsSaga(),
    userSaga(),
    productSaga(),
    postsSaga(),
  ]);
}

const rootReducers = combineReducers({
  user: userReducer,
  product: productsReducer,
  posts: postsReducer,
  favorite: favoriteReducer,
  carts: cartsReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
