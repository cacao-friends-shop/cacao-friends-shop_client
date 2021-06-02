import CartListItem from 'components/molecules/CartListItem';
import React from 'react';
import { Carts } from 'types/Carts';

type CartListProps = {
  cartProducts: Carts[];
};

const CartList = ({ cartProducts }: CartListProps) => {
  return (
    <ul>
      {cartProducts.map(cartProduct => (
        <CartListItem
          key={cartProduct.id}
          amount={cartProduct.amount}
          imgPath={cartProduct.product.thumbnailImageUrl}
          title={cartProduct.product.title}
          price={+cartProduct.product.price.replace(/,/, '')}
        />
      ))}

      {/* <CartListItem title="내마음을 받아라이언" price={30000} />
      <CartListItem title="내마음을 받아라이언" price={30000} />
      <CartListItem title="내마음을 받아라이언" price={30000} />
      <CartListItem title="내마음을 받아라이언" price={30000} /> */}
    </ul>
  );
};

export default CartList;
