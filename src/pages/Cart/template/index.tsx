import { css } from '@emotion/react';
import Button from 'components/atoms/Button';
import CartListDeletebar from 'components/molecules/CartListDeletebar';
import PriceInfo from 'components/molecules/PriceInfo';
import CartList from 'components/organisms/CartList';
import React from 'react';
import { fontSizes } from 'theme';

const CartTemplate = () => {
  return (
    <>
      <div css={container}>
        <CartListDeletebar />
        <CartList />
        <PriceInfo totalPrice={66000} />
      </div>
      <Button css={buttonStyle}>66000원 주문 하기</Button>
    </>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
  overflow: auto;
`;

const buttonStyle = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  max-width: 64rem;
  color: #fff;
  font-size: ${fontSizes.xl_20};
  font-weight: 900;
  padding: 3rem;
  letter-spacing: 1px;
`;

export default CartTemplate;
