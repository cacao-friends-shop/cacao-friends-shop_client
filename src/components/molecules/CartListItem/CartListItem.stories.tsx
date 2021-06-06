import CartListItem from '.';

export default {
  component: CartListItem,
  title: 'molecules/CartListItem',
};

// 기본 타임스템프
export const DefaultCartListItem = () => (
  <CartListItem
    id={1}
    amount={1}
    imgPath=""
    title="내사랑을 받아라이언"
    price={39000}
  />
);
