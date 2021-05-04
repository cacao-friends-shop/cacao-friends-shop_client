import OrderListItem from 'components/molecules/OrderListItem';
import React from 'react';

type OrderListProps = {};

const OrderList = ({}: OrderListProps) => {
  return (
    <ul>
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
    </ul>
  );
};

export default OrderList;
