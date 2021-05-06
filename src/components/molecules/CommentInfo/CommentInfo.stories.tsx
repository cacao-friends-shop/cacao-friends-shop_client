import CommentInfo from './';

export default {
  component: CommentInfo,
  title: 'molecules/CommentInfo',
};

// 좋아요 0개
export const commentInfo01 = () => (
  <CommentInfo date="2021-05-04" likeCount={0} />
);

// 좋아요 3개
export const commentInfo02 = () => (
  <CommentInfo date="2021-05-04" likeCount={3} />
);

commentInfo01.storyName = '좋아요 없는 댓글';
commentInfo02.storyName = '좋아요 있는 댓글';
