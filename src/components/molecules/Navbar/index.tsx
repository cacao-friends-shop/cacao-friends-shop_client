import React from 'react';
import { css } from '@emotion/react';
import { colors, fontSizes } from 'theme';
import Title from 'components/atoms/Title';

export type NavbarProps = {
  /** 네브바 타이틀 */
  title: string;
};

const Navbar = ({ title }: NavbarProps) => {
  return (
    <>
      <section css={container}>
        <div css={navbarContainer}>
          <div css={headingStyle}>
            <Title headingNumber={1}>{title}</Title>
          </div>
        </div>
      </section>
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
  font-size: ${fontSizes.xxxs_12};
  letter-spacing: -0.025rem;
  max-width: 21.4rem;
`;

export default Navbar;
