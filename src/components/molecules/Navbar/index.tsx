import React from 'react';
import { css } from '@emotion/react';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';
import { Link } from 'react-router-dom';
import IconButton from 'components/molecules/IconButton';
import { colors, fontSizes } from 'theme';
import Title from 'components/atoms/Title';

export type NavbarProps = {
  /** 네브바 타이틀 */
  title: string;
};

const Navbar = ({ title }: NavbarProps) => {
  return (
    <>
      <header css={container}>
        <section css={navbarContainer}>
          <div css={IconButtonContainerStyle}>
            <IconButton name="arrowLeft" size={28} />
            <IconButton name="home" size={28} />
          </div>
          <div css={headingStyle}>
            <Title headingNumber={1}>{title}</Title>
          </div>
          <div css={IconButtonContainerStyle}>
            <IconButton name="search" size={28} />
          </div>
        </section>
      </header>
    </>
  );
};

const container = css`
  display: flex;
  flex-direction: column;
  max-width: 64rem;
  position: sticky;
  width: 100%;
  z-index: 1000;
  top: 0;
  margin: 0 auto;
  background-color: ${colors.white};
  border-bottom: 0.1rem solid rgb(200, 201, 204);
`;
const navbarContainer = css`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 1.3rem 0.7rem;
  padding: 1.3rem 0 1rem;
  & + div {
    margin-top: 2rem;
  }
`;

const headingStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${fontSizes.base_16};
  letter-spacing: -0.025rem;
  max-width: 21.4rem;
`;
const IconButtonContainerStyle = css`
  display: flex;
  button + button {
    margin-left: 1rem;
  }
`;

export default Navbar;
