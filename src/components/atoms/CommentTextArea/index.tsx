import { css } from '@emotion/react';
import React from 'react';

type CommentTextAreaProps = {
  placeholder: string;
};

const CommentTextArea = ({ placeholder }: CommentTextAreaProps) => {
  return (
    <div css={container}>
      <textarea
        name="comment"
        title={placeholder}
        placeholder={placeholder}
      ></textarea>
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
    width: 100%;
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
  }
`;

export default CommentTextArea;
