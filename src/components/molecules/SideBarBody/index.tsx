import React from 'react';
import { css } from '@emotion/react';
import Divider from 'components/atoms/Divider';
import { Link } from 'react-router-dom';

const SideBarBody = () => {
  return (
    <>
      <ul css={style}>
        <li>
          <Link to="/">장바구니 내역</Link>
        </li>
        <li>
          <Link to="/">주문·배송 내역</Link>
        </li>
        <li>
          <span tabIndex={0}>캐릭터</span>
          <ul>
            {/* TODO: 아바타 넣기 */}
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
          </ul>
        </li>
      </ul>
      <Divider />
    </>
  );
};

const style = css`
  font-size: 1.5rem;
  padding: 2rem 0;

  li {
    padding: 1.5rem 0;
  }
`;

export default SideBarBody;
