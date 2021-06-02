import React, { useEffect, useMemo } from 'react';
import { css } from '@emotion/react';
import Button from 'components/atoms/Button';
import CartListDeletebar from 'components/molecules/CartListDeletebar';
import PriceInfo from 'components/molecules/PriceInfo';
import CartList from 'components/organisms/CartList';
import { fontSizes } from 'theme';
import TabComp from 'components/molecules/TabComp';
import MyTab from 'components/molecules/MyTab';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { getCarts } from 'modules/carts/cartsSlice';

const CartTemplate = () => {
  const { data: cartProducts } = useSelector((state: RootState) => state.carts);
  const dispatch = useDispatch();

  const totalPrice = useMemo(
    () =>
      cartProducts?.reduce(
        (acc, cur) => acc + +cur.product.price.replace(/,/, ''),
        0
      ),
    [cartProducts]
  );

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

  if (!cartProducts) return null;
  return (
    <>
      <TabComp />
      <MyTab />
      <div css={container}>
        <CartListDeletebar cartProductsCount={cartProducts.length} />
        <CartList cartProducts={cartProducts} />
        <PriceInfo totalPrice={totalPrice as number} />
      </div>
      <Button css={buttonStyle}>{totalPrice}원 주문 하기</Button>
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
  width: 100%;
  transform: translate3d(-50%, 0, 0);
  max-width: 64rem;
  color: #fff;
  font-size: ${fontSizes.xl_20};
  font-weight: 900;
  padding: 3rem;
  letter-spacing: 1px;
`;

export default CartTemplate;
