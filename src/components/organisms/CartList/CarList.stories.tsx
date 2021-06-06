import CartList from './';

export default {
  title: 'organisms/CartList',
  component: CartList,
};

export const DefaultCartList = () => <CartList cartProducts={[]} />;
