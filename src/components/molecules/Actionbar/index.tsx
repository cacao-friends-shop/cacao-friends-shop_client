import React from 'react';
import IconButton from 'components/molecules/IconButton';
import Indicator from 'components/atoms/Indicator';
import { css } from '@emotion/react';

type ActionbarProps = {
  /** 이미지의 갯수 */
  imgLength: number;
  /** 현재 보이는 이미지의 인덱스 */
  currentIdx: number;
};

const Actionbar = ({ imgLength, currentIdx }: ActionbarProps) => {
  return (
    <div css={container}>
      <div css={buttonGroup}>
        <IconButton name="outlineHeart" size={30} />
        <IconButton name="bubble" size={30} />
      </div>
      <div css={indicatorContainer}>
        <Indicator imgLength={imgLength} currentIdx={currentIdx} />
      </div>
      <IconButton name="share" size={30} />
    </div>
  );
};

const container = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const buttonGroup = css`
  display: flex;
`;

const indicatorContainer = css`
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

export default Actionbar;
