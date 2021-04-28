import React from 'react';
import IconButton from 'components/molecules/IconButton';
import Indicator from 'components/atoms/Indicator';
import { css } from '@emotion/react';
import IconLink from '../IconLink';

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
        <IconButton name="outlineHeart" size={30} title="좋아요 버튼" />
        <IconLink
          to="/"
          iconName="bubble"
          iconSize={30}
          title="댓글 이동 링크"
        />
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

  button + div {
    margin-left: 1rem;
  }
`;

const indicatorContainer = css`
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

export default Actionbar;
