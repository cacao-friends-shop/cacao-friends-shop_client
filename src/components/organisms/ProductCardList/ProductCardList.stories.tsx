import ProductCardList from '.';

export default {
  component: ProductCardList,
  title: 'organisms/ProductCardList',
};

// 기본 포스트 카드
export const DefaultProductCardList = () => (
  <ProductCardList characterName="라이언" products={[]} />
);
