import React from 'react';
import { css } from '@emotion/react';
import OrderDetailList from 'components/organisms/OrderDetailList';
import TabComp from 'components/molecules/TabComp';
import MyTab from 'components/molecules/MyTab';

const OrderDeatailTemplate = () => {
  return (
    <>
      <TabComp />
      <MyTab />
      <div css={container}>
        <strong>총 16건</strong>
        <OrderDetailList />
      </div>
    </>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
  padding: 1rem;

  strong {
    display: block;
    padding-top: 2rem;
  }
`;

export default OrderDeatailTemplate;
