import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as postsAPI from 'apis/posts';
import {
  addPost,
  addPostError,
  addPostSuccess,
  deletePost,
  deletePostError,
  deletePostSuccess,
  editPost,
  editPostError,
  editPostSuccess,
  getPost,
  getPostError,
  getPosts,
  getPostsByCharacterType,
  getPostsByCharacterTypeError,
  getPostsByCharacterTypeSuccess,
  getPostsError,
  getPostsSuccess,
  getPostSuccess,
} from './postsSlice';
import { AddPostType, EditPostType, PostsType, PostType } from './types';

// 전체 조회
function* getPostsSaga() {
  try {
    const posts: PostsType[] = yield call(postsAPI.getPosts);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    yield put(getPostsError(e));
  }
}

// 캐릭터별 조회
function* getPostsByCharacterTypeSaga(action: PayloadAction<string>) {
  try {
    const posts: PostsType[] = yield call(
      postsAPI.getPostsByCharacterType,
      action.payload
    );
    yield put(getPostsByCharacterTypeSuccess(posts));
  } catch (e) {
    yield put(getPostsByCharacterTypeError(e));
  }
}

// id 조회
function* getPostSaga(action: PayloadAction<number>) {
  try {
    const post: PostType = yield call(postsAPI.getPostById, action.payload);
    yield put(getPostSuccess(post));
  } catch (e) {
    yield put(getPostError({ error: e, meta: action.payload }));
  }
}

// 포스트 추가
function* addPostSaga(action: PayloadAction<AddPostType>) {
  try {
    const post: PostsType = yield call(postsAPI.addPost, action.payload);
    yield put(addPostSuccess(post));
  } catch (e) {
    yield put(addPostError(e));
  }
}

// 포스트 수정
function* editPostSaga(action: PayloadAction<EditPostType>) {
  try {
    const post: PostType = yield call(postsAPI.editPost, action.payload);
    yield put(editPostSuccess(post));
  } catch (e) {
    yield put(editPostError(e));
  }
}

// 포스트 삭제
function* deletePostSaga(action: PayloadAction<number>) {
  try {
    const id: number = yield call(postsAPI.deletePost, action.payload);
    yield put(deletePostSuccess(id));
  } catch (e) {
    yield put(deletePostError(e));
  }
}

// 모니터링 함수
export function* postsSaga() {
  yield takeEvery(getPosts.type, getPostsSaga);
  yield takeEvery(getPostsByCharacterType.type, getPostsByCharacterTypeSaga);
  yield takeEvery(getPost.type, getPostSaga);
  yield takeEvery(addPost.type, addPostSaga);
  yield takeEvery(editPost.type, editPostSaga);
  yield takeEvery(deletePost.type, deletePostSaga);
}
