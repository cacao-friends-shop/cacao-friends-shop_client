// import React from 'react';
import Button from './index';
import { css } from '@emotion/css';

export default {
  component: Button,
  title: 'components/Button',
};

export const buyNow = () => <Button>바로구매</Button>;

export const login = () => <Button>로그인</Button>;

export const listOfButton = () => {
  return (
    <ul className={buttonListStyle}>
      <li>
        <Button>바로구매</Button>
      </li>
      <li>
        <Button>로그인</Button>
      </li>
    </ul>
  );
};

const buttonListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
