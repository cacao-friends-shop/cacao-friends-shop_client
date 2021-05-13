import { combineReducers } from 'redux';
import { userSaga } from 'modules/User/saga';
import { all } from 'redux-saga/effects';
import productSaga from 'modules/Product/saga';
import productsReducer from '../modules/Product/reducer';
import userReducer from 'modules/User/reducer';

export function* rootSaga() {
  yield all([productSaga(), userSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

const rootReducers = combineReducers({
  product: productsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
