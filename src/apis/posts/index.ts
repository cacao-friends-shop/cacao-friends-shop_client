import axios from 'axios';
import {
  AddPostType,
  EditPostType,
  PostsType,
  PostType,
} from 'modules/posts/types';

// posts 조회(전체 조회)
export const getPosts = async () => {
  const response = await axios.get<PostsType[]>('/posts');
  return response.data;
};

// posts 조회(캐릭터 조회)
export const getPostsByCharacterType = async (characterType: string) => {
  const response = await axios.get<PostsType[]>(
    `/posts/${characterType}/characterType`
  );
  return response.data;
};

// post 조회(id 조회)
export const getPostById = async (id: number) => {
  const response = await axios.get<PostType>(`/posts/${id}/id`);
  return response.data;
};

// post 추가
export const addPost = async (postData: AddPostType) => {
  const response = await axios.post<PostsType>('/posts', {
    title: postData.title,
    content: postData.content,
    characterType: postData.characterType,
    createdDateTime: postData.createdDateTime,
    imageUrls: postData.imageUrls,
  });
  return response.data;
};

// post 수정
export const editPost = async (editData: EditPostType) => {
  const response = await axios.put<PostsType>('/posts', {
    id: editData.id,
    title: editData.title,
    content: editData.content,
    characterType: editData.characterType,
    createdDateTime: editData.createdDateTime,
    imageUrls: editData.imageUrls,
  });
  return response.data;
};

// post 삭제
export const deletePost = async (id: number) => {
  const response = await axios.delete(`/posts/${id}`);
  if (response.status === 204) return id;
  else return response.status;
};
