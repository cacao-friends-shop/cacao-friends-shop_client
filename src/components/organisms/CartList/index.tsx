import CartListItem from 'components/molecules/CartListItem';
import React from 'react';

const CartList = () => {
  return (
    <ul>
      <CartListItem title="내마음을 받아라이언" price={30000} />
      <CartListItem title="내마음을 받아라이언" price={30000} />
      <CartListItem title="내마음을 받아라이언" price={30000} />
      <CartListItem title="내마음을 받아라이언" price={30000} />
    </ul>
  );
};

export default CartList;
