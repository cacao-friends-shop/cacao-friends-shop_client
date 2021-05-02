import PostInfo from './index';

export default {
  componen: PostInfo,
  title: 'atoms/PostInfo',
};

export const postInfo = () => (
  <PostInfo
    likeCount={2}
    writer="jiwon"
    date="2020-05-19 17:27"
    commentsCount={36}
  />
);
