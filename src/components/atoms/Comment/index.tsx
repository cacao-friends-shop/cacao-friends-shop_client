import { css } from '@emotion/react';
import React from 'react';

type CommentProps = {
  /** 댓글 작성자 이름 */
  name: string;
  /** 댓글 작성 내용 */
  comment: string;
};

const Comment = ({ name, comment }: CommentProps) => {
  return (
    <p css={commentStle}>
      <span css={nameStyle}>{name}</span> {comment}
    </p>
  );
};

const commentStle = css`
  color: rgb(155, 155, 155);
`;

const nameStyle = css`
  font-weight: bold;
  font-size: 1.3rem;
  margin-right: 0.5rem;
  color: #2d2d2d;
`;

export default Comment;
