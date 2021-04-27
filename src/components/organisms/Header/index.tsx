import { css } from '@emotion/react';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';
import { Link } from 'react-router-dom';
import IconButton from 'components/molecules/IconButton';

export type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <header css={headerStyle}>
      <section>
        <IconButton name="menu" size={32} />
        <div css={headerLogoStyle}>
          <Link to="/"></Link>
          <A11yHiddenHeading comp="h1">
            CACAO Friends 웹사이트
          </A11yHiddenHeading>
        </div>
        <div css={IconButtonContainerStyle}>
          {/* 추후 아이콘 추가  */}
          <IconButton name="search" size={32} />
        </div>
      </section>
    </header>
  );
};

const headerStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  position: sticky;
  top: 0;
  margin: 0 auto;
  section {
    display: flex;
    justify-content: space-between;
    margin: 0.8rem 1.3rem 0.7rem;
  }
`;

const headerLogoStyle = css`
  width: 147px;
  height: 24px;

  a {
    display: block;
    margin-top: 0.3rem;
    width: 100%;
    height: 100%;
    background: url('https://t1.kakaocdn.net/friends/new_store/2.0/mobile/new-logo-mo.png');
    background-size: cover;
  }
`;
const IconButtonContainerStyle = css`
  display: flex;
  button + button {
    margin-left: 0.5rem;
  }
`;

export default Header;
