import PostInfo from './index';

export default {
  componen: PostInfo,
  title: 'molecules/PostInfo',
};

export const postInfo = () => (
  <PostInfo
    likeCount={2}
    writer="jiwon"
    date="2020-05-19 17:27"
    commentsCount={36}
  />
);
