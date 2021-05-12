import React, { useState } from 'react';
import { css } from '@emotion/react';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';
import { Link } from 'react-router-dom';
import IconButton from 'components/molecules/IconButton';
import ModalContainer from 'utils/portal';
import SearchBarChar from 'components/organisms/SearchBarChar';
import SearchBar from 'components/molecules/SearchBar';
import { AnimatePresence } from 'framer-motion';
import { colors } from 'theme';
import { ReactComponent as HeaderLogo } from 'assets/logo.svg';
import SideBarModal from '../SideBarModal';

export type HeaderProps = {
  TabComp?: any;
  MyTab?: any;
};

const Header = ({ TabComp, MyTab }: HeaderProps) => {
  const [isShow, setIsShow] = useState(false);
  const [isSearchShown, setIsSearchShown] = useState(false);

  return !isSearchShown ? (
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
        {MyTab ? <MyTab /> : null}
      </header>
      <AnimatePresence>
        {isShow && (
          <ModalContainer id="modal-root">
            <SideBarModal setIsShow={setIsShow} />
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  ) : (
    <>
      <SearchBar onClick={() => setIsSearchShown(false)}></SearchBar>
      <SearchBarChar />
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

export default Header;
