import Comment from '.';

export default {
  component: Comment,
  title: 'components/Comment',
};

export const DefaultComment = () => (
  <Comment name="김지원" comment="나 좀 알려줘~~~" />
);
