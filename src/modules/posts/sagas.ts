import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as postsAPI from 'apis/posts';
import {
  getPost,
  getPostError,
  getPosts,
  getPostsError,
  getPostsSuccess,
  getPostSuccess,
} from './postsSlice';
import { PostsType, PostType } from './types';

function* getPostsSaga() {
  try {
    const posts: PostsType[] = yield call(postsAPI.getPosts);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    yield put(getPostsError(e));
  }
}

function* getPostSaga(action: PayloadAction<number>) {
  try {
    const post: PostType = yield call(postsAPI.getPostById, action.payload);
    yield put(getPostSuccess(post));
  } catch (e) {
    yield put(getPostError({ error: e, meta: action.payload }));
  }
}

// 모니터링 함수
export function* postsSaga() {
  yield takeEvery(getPosts.type, getPostsSaga);
  yield takeEvery(getPost.type, getPostSaga);
}
