import ProductListItem from '.';

export default {
  component: ProductListItem,
  title: 'molecules/ProductListItem',
};

// 기본 타임스템프
export const DefaultProductListItem = () => (
  <ProductListItem imgPath="" title="내사랑을 받아라이언" price={39000} />
);
