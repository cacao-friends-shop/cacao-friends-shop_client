import React from 'react';
import { css } from '@emotion/react';
import NeedLogin from 'components/molecules/NeedLogin';
import LinkIcon from 'components/molecules/LinkIcon';
import Divider from 'components/atoms/Divider';

const SideBarHeader = () => {
  return (
    <>
      <div css={style}>
        <NeedLogin />
        <LinkIcon
          type="rightIcon"
          iconName="arrowRight"
          iconSize={15}
          bgColor="transparent"
          css={style_button}
        >
          비회원 주문조회
        </LinkIcon>
      </div>
      <Divider />
    </>
  );
};

const style = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2.5rem;
`;

const style_button = css`
  font-size: 1.4rem;
  span {
    margin-right: 0.3rem;
  }
`;

export default SideBarHeader;
