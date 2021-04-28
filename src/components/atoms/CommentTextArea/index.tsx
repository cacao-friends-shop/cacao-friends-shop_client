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
        disabled
      ></textarea>
    </div>
  );
};

const container = css`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  background-color: rgb(240, 241, 244);
  border-radius: 30px;
  border-top-left-radius: 0;

  textarea {
    width: 100%;
    padding-top: 1rem;
    padding-left: 0.5rem;
    resize: none;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &::placeholder {
      color: #aaa;
    }
  }
`;

export default CommentTextArea;
