import { css } from '@emotion/react';
import React from 'react';
import { fontSizes } from 'theme';
import IconButton from '../IconButton';

type DeletebarBaseProps = {
  deleteMsg: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const DeletebarBase = ({
  children,
  deleteMsg,
  ...restProps
}: DeletebarBaseProps) => {
  return (
    <div css={container} {...restProps}>
      <div>{children}</div>
      <div css={deleteContainer}>
        <span>{deleteMsg}</span>
        <IconButton name="trash" size={20} />
      </div>
    </div>
  );
};

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(154, 154, 158);
  font-size: ${fontSizes.xxs_13};
  padding: 1.5rem 1rem;
`;

const deleteContainer = css`
  display: flex;
  align-items: center;

  span {
    color: #666;
    font-size: ${fontSizes.xs_14};
    margin-right: 0.5rem;
  }
`;
export default DeletebarBase;
