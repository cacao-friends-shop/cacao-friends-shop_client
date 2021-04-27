import { css } from '@emotion/react';
import React from 'react';

const CommentTextArea = () => {
  return (
    <div css={container}>
      <textarea name="comment" placeholder="댓글을 달아주세요."></textarea>
    </div>
  );
};

const container = css`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  border-top-left-radius: 0;

  textarea {
    position: relative;
    padding-top: 1rem;
    padding-left: 0.5rem;
    resize: none;
    background: transparent;
    border: none;
    outline: none;
    z-index: -1000;
    &::placeholder {
      color: #aaa;
    }

    &:focus-visible {
      outline: initial;
    }
  }
`;

export default CommentTextArea;
