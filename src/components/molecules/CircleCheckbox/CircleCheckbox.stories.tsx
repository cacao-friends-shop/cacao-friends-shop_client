import { css } from '@emotion/react';
import { fontSizes } from 'theme';
import CircleCheckbox from '.';

export default {
  component: CircleCheckbox,
  title: 'molecules/CircleCheckbox',
};

// 기본 타임스템프
export const DefaultCircleCheckbox = () => (
  <CircleCheckbox css={circleCheckboxStyle}>
    <span>전체삭제</span>
  </CircleCheckbox>
);

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
