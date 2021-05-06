import ProductDetailReview from '.';

export default {
  component: ProductDetailReview,
  title: 'organisms/ProductDetailReview',
};

// 기본 포스트 카드
export const ProductDetailReviewBlock = () => (
  <ProductDetailReview numOfReviews={4} rating={7} />
);
