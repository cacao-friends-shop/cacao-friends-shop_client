import { css } from '@emotion/react';
import Button from 'components/atoms/Button';
import PriceInfo from 'components/molecules/PriceInfo';
import OrderList from 'components/organisms/OrderList';
import React from 'react';
import { fontSizes } from 'theme';

const OrderTemplate = () => {
  return (
    <div css={container}>
      <h2>주문상품</h2>
      <OrderList />
      <PriceInfo totalPrice={30000} />
      <Button css={buttonStyle} bgColor="rgb(255, 234, 1)">
        결제하기
      </Button>
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
  overflow-y: auto;
  padding: 1rem;

  h2 {
    padding: 2rem 0 3rem;
    border-bottom: 1px solid rgb(242, 242, 242);
  }
`;

const buttonStyle = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  max-width: 64rem;
  font-size: ${fontSizes.xl_20};
  font-weight: 900;
  padding: 2rem;
  letter-spacing: 1px;
`;

export default OrderTemplate;
