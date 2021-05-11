import { css } from '@emotion/react';
import OrderDetailList from 'components/organisms/OrderDetailList';
import React from 'react';

const OrderDeatailTemplate = () => {
  return (
    <div css={container}>
      <strong>총 16건</strong>
      <OrderDetailList />
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
  padding: 1rem;

  strong {
    display: block;
    padding: 2rem 0;
  }
`;

export default OrderDeatailTemplate;
