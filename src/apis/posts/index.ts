import axios from 'axios';
import { PostsType, PostType } from 'modules/posts/types';

// posts 조회(전체 조회)
export const getPosts = async () => {
  const response = await axios.get<PostsType[]>('/posts');
  return response.data;
};

// post 조회(id 조회)
export const getPostById = async (id: number) => {
  const response = await axios.get<PostType>(`/posts/${id}/id`);
  return response.data;
};

// post 조회(캐릭터별 조회)
// export const getPostsByCharacterType = async (characterType: string) => {
//   const response = await axios.get<PostsType[]>(
//     `/posts/${characterType}/characterType`
//   );
//   return response.data;
// };
