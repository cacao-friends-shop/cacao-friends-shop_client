import PostList from './index';
import { PostListItems } from 'staticData';

export default {
  component: PostList,
  title: 'organisms/PostList',
};

export const postList = () => <PostList contents={PostListItems} />;
