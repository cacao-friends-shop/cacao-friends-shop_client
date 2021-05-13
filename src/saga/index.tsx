import { combineReducers } from 'redux';
import { loginSaga, userSaga } from './User/saga';
import { LOG_IN, SIGN_OUT, LOG_IN_FAILURE, PENDING } from './User/actions';
import userReducer from './User';
import { all, takeLatest } from 'redux-saga/effects';
import productSaga from 'modules/Product/saga';
import productsReducer from '../modules/Product/reducer';

export function* rootSaga() {
  yield all([productSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

const rootReducers = combineReducers({
  product: productsReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
