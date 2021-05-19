import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import productSaga from 'modules/Product/saga';
import productsReducer from '../modules/Product/reducer';
import postsReducer from 'modules/posts/postsSlice';
import { postsSaga } from 'modules/posts/sagas';

export function* rootSaga() {
  yield all([productSaga(), postsSaga()]);
}

const rootReducers = combineReducers({
  product: productsReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
