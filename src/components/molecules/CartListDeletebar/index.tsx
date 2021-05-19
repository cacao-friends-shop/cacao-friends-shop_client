import React from 'react';
import DeletebarBase from 'components/molecules/DeletebarBase';
import CircleCheckbox from '../CircleCheckbox/index';
import { css } from '@emotion/react';
import { fontSizes } from 'theme';

const CartListDeletebar = () => {
  return (
    <DeletebarBase deleteMsg="2개 선택">
      <CircleCheckbox css={circleCheckboxStyle}>
        <span>전체 2</span>
      </CircleCheckbox>
    </DeletebarBase>
  );
};

const circleCheckboxStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  cursor: pointer;

  span {
    color: black;
    font-size: ${fontSizes.xs_14};
    margin-left: 0.5rem;
  }
`;

export default CartListDeletebar;
