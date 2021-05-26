import ProductImageCard from '.';

export default {
  component: ProductImageCard,
  title: 'molecules/ProductImageCard',
};

// 기본 타임스템프
export const DefaultProductImageCard = () => (
  <ProductImageCard
    img="https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg"
    to={1}
  />
);
