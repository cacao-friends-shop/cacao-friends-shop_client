import { css } from '@emotion/react';
import React from 'react';
import ProductListItem from '../ProductListItem';

const OrderListItem = () => {
  return (
    <ProductListItem css={container} title="내마음을 받아라이언" price={30000}>
      <input type="number" />
    </ProductListItem>
  );
};

const container = css`
  padding: 2rem 0;

  input {
    width: 8rem;
    height: 3rem;
    margin-top: 3.5rem;
    padding: 0 0 0 1rem;
  }
  h2 {
    color: black;
  }
  span {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    font-weight: 500;
  }

  button {
    transform: translate3d(-100%, 0, 0);
  }
`;
export default OrderListItem;
