import React, { useState } from 'react';
import { css } from '@emotion/react';
import SideBarHeader from 'components/molecules/SideBarHeader';
import SideBarBody from 'components/molecules/SideBarBody';
import SideBarFooter from 'components/molecules/SideBarFooter';
import ModalOverlay from 'components/atoms/ModalOverlay';
import { colors } from 'theme';

const SideBar = () => {
  // TODO: Header로 상태 가져가기
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <ModalOverlay isShow={isShow} onClick={() => setIsShow(false)} />
      <div css={style(isShow)}>
        <SideBarHeader />
        <SideBarBody />
        <SideBarFooter />
      </div>
    </>
  );
};

const style = (isShow: boolean) => css`
  position: relative;
  display: ${isShow ? 'block' : 'none'};
  background-color: ${colors.white};
  max-width: 40rem;
  height: 100vh;
  padding: 3.5rem 2.4rem;
`;

export default SideBar;
