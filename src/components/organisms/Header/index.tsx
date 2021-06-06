import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';
import { Link } from 'react-router-dom';
import IconButton from 'components/molecules/IconButton';
import ModalContainer from 'utils/portal';
import SearchBarChar from 'components/organisms/SearchBarChar';
import SearchBar from 'components/molecules/SearchBar';
import { AnimatePresence } from 'framer-motion';
import { colors } from 'theme';
import SideBarModal from '../SideBarModal';
import getPublicAsset from 'utils/getPublicAsset';
import IconLink from 'components/molecules/IconLink';
import { RootState } from 'saga';
import { updateUserInfoAction } from 'modules/User/actions';

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [isSearchShown, setIsSearchShown] = useState(false);
  const user = useSelector((state: RootState) => state.user);

  return !isSearchShown ? (
    <>
      <header css={container}>
        <section css={headerContainer}>
          <IconButton name="menu" size={30} onClick={() => setIsShow(true)} />
          <div css={headerLogoStyle}>
            <Link to="/">
              <img
                src={getPublicAsset('assets/logo.png')}
                alt="CACAO FRIENDS"
              />
            </Link>
            <A11yHiddenHeading comp="h1">
              CACAO Friends 웹사이트
            </A11yHiddenHeading>
          </div>
          <div css={IconButtonContainerStyle}>
            {/* 추후 어드민 아이콘 처리  */}
            {user.authUser && user.authUser?.memberLevel === 'ADMIN' && (
              <IconLink
                iconName="edit"
                iconSize={20}
                to="/admin/posts"
                css={linkStyle}
              />
            )}

            <IconButton name="search" size={25} />
          </div>
        </section>
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
  align-items: center;
  margin: 1rem 1.3rem 1rem;

  & + div {
    margin-top: 2rem;
  }
`;
const headerLogoStyle = css`
  /* width: 20rem;
  height: 5rem; */

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

const linkStyle = css`
  margin-right: 2rem;
`;

export default Header;
