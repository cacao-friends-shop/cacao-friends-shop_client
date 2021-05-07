import React, { useState } from 'react';
import { css } from '@emotion/react';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';
import { Link } from 'react-router-dom';
import IconButton from 'components/molecules/IconButton';
import ModalContainer from 'utils/portal';
import SideBar from 'components/organisms/SideBar';
import ModalOverlay from 'components/atoms/ModalOverlay';
import { AnimatePresence } from 'framer-motion';
import { colors } from 'theme';
import { ReactComponent as HeaderLogo } from 'assets/logo.svg';
import IconLink from 'components/molecules/IconLink';

const imageList = [
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_1_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_2_20210426185905.jpg',
];

export type HeaderProps = {
  TabComp?: any;
};

const Header = ({ TabComp }: HeaderProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <header css={container}>
        <section css={headerContainer}>
          <IconButton name="menu" size={30} onClick={() => setIsShow(true)} />
          <div css={headerLogoStyle}>
            <Link to="/">
              <HeaderLogo />
            </Link>
            <A11yHiddenHeading comp="h1">
              CACAO Friends 웹사이트
            </A11yHiddenHeading>
          </div>
          <div css={IconButtonContainerStyle}>
            {/* 추후 어드민 아이콘 처리  */}
            {/* <IconLink iconName="edit" iconSize={20} to="/" css={LinkStyle} /> */}
            <IconButton name="search" size={25} />
          </div>
        </section>
        {TabComp ? <TabComp /> : null}
      </header>
      <AnimatePresence>
        {isShow && (
          <ModalContainer id="modal-root">
            <ModalOverlay
              onClick={() => setIsShow(false)}
              bgColor={colors.black}
              opacity={0.7}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
            />
            <SideBar
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'none' }}
              exit={{ x: '-100vw', opacity: 0 }}
            >
              <SideBar.Header type="nonLogin" />
              <SideBar.Body />
              <SideBar.Footer type="nonLogin" />
            </SideBar>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  );
};

const container = css`
  display: flex;
  flex-direction: column;
  max-width: 64rem;
  position: sticky;
  z-index: 1000;
  top: 0;
  margin: 0 auto;
  background-color: ${colors.white};
`;
const headerContainer = css`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 1.3rem 0;

  & + div {
    margin-top: 2rem;
  }
`;
const headerLogoStyle = css`
  width: 20rem;
  height: 5rem;

  a {
    display: block;
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
const IconButtonContainerStyle = css`
  display: flex;
  button + button {
    margin-left: 0.5rem;
  }
`;

const LinkStyle = css`
  margin-right: 2rem;
`;

export default Header;
