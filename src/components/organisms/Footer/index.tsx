import { css } from '@emotion/react';
import Icon from 'components/atoms/Icon';
import React from 'react';
import { fontSizes } from 'theme';

const Footer = () => {
  return (
    <footer css={container}>
      <h2>Made by</h2>
      <a href="/">
        <Icon name="github" size={30} />
        <span>Yeongoo</span>
      </a>
      <a href="/">
        <Icon name="github" size={30} />
        <span>Jiwon</span>
      </a>
      <a href="/">
        <Icon name="github" size={30} />
        <span>Jaehoon</span>
      </a>
    </footer>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
  background: rgb(250, 250, 250);
  height: 20rem;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    font-size: ${fontSizes.base_16};
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;

    span {
      font-size: ${fontSizes.xxxs_12};
      margin-top: 1rem;
      font-weight: bold;
      color: #aaa;
    }
  }
`;

export default Footer;
