import ProductCard from '.';

export default {
  component: ProductCard,
  title: 'molecules/ProductCard',
};

// 기본 타임스템프
export const DefaultProductCard = () => (
  <ProductCard title="1" price="1" imgPath="1" />
);
