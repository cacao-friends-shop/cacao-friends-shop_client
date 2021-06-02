import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import {
  AddPostType,
  EditPostType,
  PostsState,
  PostsType,
  PostType,
} from './types';

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
    // 전체 조회
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

    // 캐릭터별 조회
    getPostsByCharacterType(state: PostsState, action: PayloadAction<string>) {
      state.posts.loading = true;
      state.posts.data = state.posts.data ? state.posts.data : null;
    },
    getPostsByCharacterTypeSuccess(
      state: PostsState,
      action: PayloadAction<PostsType[]>
    ) {
      state.posts.loading = false;
      state.posts.data = action.payload;
    },
    getPostsByCharacterTypeError(
      state: PostsState,
      action: PayloadAction<AxiosError>
    ) {
      state.posts.loading = false;
      state.posts.error = action.payload;
    },

    // id별 조회
    getPost(state: PostsState, action: PayloadAction<number>) {
      state.post[action.payload] = {
        loading: true,
        data: state.post[action.payload]
          ? state.post[action.payload].data
          : null,
        error: null,
      };
      //{
      //   ...state.post,
      //   [action.payload]: {
      //     loading: true,
      //     data: state.post[action.payload]
      //       ? state.post[action.payload].data
      //       : null,
      //     error: null,
      //   },
      // };
    },
    getPostSuccess(state: PostsState, action: PayloadAction<PostType>) {
      state.post[action.payload.id] = {
        loading: false,
        data: action.payload,
        error: null,
      };
    },
    // {
    //   ...state.post,
    //   [action.payload.id]: {
    //     loading: false,
    //     data: action.payload,
    //     error: null,
    //   },
    // };
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

    // 포스트 추가
    addPost(state: PostsState, action: PayloadAction<AddPostType>) {
      state.posts.loading = true;
    },
    addPostSuccess(state: PostsState, action: PayloadAction<PostsType>) {
      state.posts.loading = false;
      if (state.posts.data) {
        state.posts.data.push(action.payload);
      }
    },
    addPostError(state: PostsState, action: PayloadAction<AxiosError>) {
      state.posts.loading = false;
      state.posts.error = action.payload;
    },

    // 포스트 수정
    editPost(state: PostsState, action: PayloadAction<EditPostType>) {
      state.post[action.payload.id].loading = true;
    },
    editPostSuccess(state: PostsState, action: PayloadAction<PostType>) {
      state.post[action.payload.id].loading = false;
      state.post[action.payload.id].data = action.payload;
    },
    editPostError(
      state: PostsState,
      action: PayloadAction<{ error: AxiosError; meta: number }>
    ) {
      state.post[action.payload.meta].loading = false;
      state.post[action.payload.meta].error = action.payload.error;
    },

    // 포스트 삭제
    deletePost(state: PostsState, action: PayloadAction<number>) {
      state.posts.loading = true;
    },
    deletePostSuccess(state: PostsState, action: PayloadAction<number>) {
      state.posts.loading = false;
      if (state.posts.data) {
        state.posts.data = state.posts.data.filter(
          post => post.id !== action.payload
        );
      }
    },
    deletePostError(state: PostsState, action: PayloadAction<AxiosError>) {
      state.posts.loading = false;
      state.posts.error = action.payload;
    },
  },
});

const { reducer, actions } = postsSlice;
export const {
  getPosts,
  getPostsSuccess,
  getPostsError,
  getPostsByCharacterType,
  getPostsByCharacterTypeSuccess,
  getPostsByCharacterTypeError,
  getPost,
  getPostSuccess,
  getPostError,
  addPost,
  addPostSuccess,
  addPostError,
  editPost,
  editPostSuccess,
  editPostError,
  deletePost,
  deletePostSuccess,
  deletePostError,
} = actions;

export default reducer;
