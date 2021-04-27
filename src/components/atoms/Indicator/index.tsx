import { css } from '@emotion/react';
import React from 'react';

type IndicatorProps = {
  /** 이미지의 갯수 */
  imgLength: number;
  /** 현재 보여지는 이미지의 인덱스 */
  currentIdx: number;
};

const Indicator = ({ imgLength, currentIdx }: IndicatorProps) => {
  return (
    <ul css={indicatorStyle}>
      {Array.from({ length: imgLength }).map((_, i) => (
        <li
          className={i === currentIdx ? 'active' : ''}
          key={i}
          css={dotStyle}
        ></li>
      ))}
    </ul>
  );
};

const indicatorStyle = css`
  display: flex;
  li + li {
    margin-left: 3px;
  }
`;

const dotStyle = css`
  background: rgba(0, 0, 0, 0.3);
  width: 7px;
  height: 7px;
  border-radius: 50%;

  &.active {
    width: 14px;
    background: #2d2d2d;
    border-radius: 5px;
  }
`;

export default Indicator;
