import PostListTitle from './index';

export default {
  component: PostListTitle,
  title: 'molecules/PostListTitle',
};

// 어드민 포스트 리스트 타이틀
export const postTitle = () => <PostListTitle title="글관리" count={24} />;
