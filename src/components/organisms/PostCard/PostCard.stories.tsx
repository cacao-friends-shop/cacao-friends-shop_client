import PostCard from '.';
import PostDetailLink from '../PostDetailLink';

export default {
  component: PostCard,
  title: 'organisms/PostCard',
};

const imageList = [
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_1_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_2_20210426185905.jpg',
];

// 기본 포스트 카드
export const DefaultPostCard = () => (
  <PostCard imgList={imageList}>
    <PostDetailLink />
  </PostCard>
);
