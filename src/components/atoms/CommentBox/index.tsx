import { css } from '@emotion/react';
import React from 'react';

type CommentTextAreaProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const CommentBox = ({ children, ...restProps }: CommentTextAreaProps) => {
  return (
    <div css={container} {...restProps}>
      {children}
    </div>
  );
};

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  background-color: rgb(240, 241, 244);
  border-radius: 30px;
  border-top-left-radius: 0;
  padding: 1rem 1.5rem;

  textarea {
    width: 100%;
    padding: 0;
    padding-left: 0.5rem;
    resize: none;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    height: 2rem;

    &::placeholder {
      color: #aaa;
    }
  }
`;

export default CommentBox;
