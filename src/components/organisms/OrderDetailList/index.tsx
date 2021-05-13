import React from 'react';
import OrderDetailListItem from 'components/molecules/OrderDetailListItem';
import { css } from '@emotion/react';

const OrderDetailList = () => {
  return (
    <ul css={container}>
      <OrderDetailListItem />
      <OrderDetailListItem />
      <OrderDetailListItem />
      <OrderDetailListItem />
      <OrderDetailListItem />
    </ul>
  );
};

const container = css`
  /* background-color: rgb(245, 245, 245); */
  padding: 0.1rem 0;
`;

export default OrderDetailList;
