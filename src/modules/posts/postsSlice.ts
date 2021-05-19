import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { PostsState, PostsType, PostType } from './types';

// 초기값
const initialState: PostsState = {
  posts: {
    data: null,
    loading: false,
    error: null,
  },
  post: {},
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(state: PostsState) {
      state.posts.loading = true;
      state.posts.data = state.posts.data ? state.posts.data : null;
    },
    getPostsSuccess(state: PostsState, action: PayloadAction<PostsType[]>) {
      state.posts.loading = false;
      state.posts.data = action.payload;
    },
    getPostsError(state: PostsState, action: PayloadAction<AxiosError>) {
      state.posts.loading = false;
      state.posts.error = action.payload;
    },
    getPost(state: PostsState, action: PayloadAction<number>) {
      state.post = {
        ...state.post,
        [action.payload]: {
          loading: true,
          data: state.post[action.payload]
            ? state.post[action.payload].data
            : null,
          error: null,
        },
      };
    },
    getPostSuccess(state: PostsState, action: PayloadAction<PostType>) {
      state.post = {
        ...state.post,
        [action.payload.id]: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    },
    getPostError(
      state: PostsState,
      action: PayloadAction<{ error: AxiosError; meta: number }>
    ) {
      state.post = {
        ...state.post,
        [action.payload.meta]: {
          loading: false,
          data: null,
          error: action.payload.error,
        },
      };
    },
  },
});

const { reducer, actions } = postsSlice;
export const {
  getPosts,
  getPostsSuccess,
  getPostsError,
  getPost,
  getPostSuccess,
  getPostError,
} = actions;
export default reducer;
