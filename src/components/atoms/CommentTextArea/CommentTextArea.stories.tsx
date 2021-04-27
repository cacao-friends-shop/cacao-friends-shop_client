import CommentTextArea from '.';

export default {
  component: CommentTextArea,
  title: 'atoms/CommnetTextArea',
};

// 기본 코멘트 텍스트에리아
export const DefaultCommentTextArea = () => (
  <CommentTextArea placeholder="댓글을 달아주세요." />
);
