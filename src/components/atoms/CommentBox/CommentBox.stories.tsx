import CommentBox from '.';

export default {
  component: CommentBox,
  title: 'atoms/CommnetTextArea',
};

// 기본 코멘트 텍스트에리아
export const DefaultCommentTextArea = () => (
  <CommentBox>
    <textarea name="comet" placeholder="댓글을 입력해주세요." />
  </CommentBox>
);
