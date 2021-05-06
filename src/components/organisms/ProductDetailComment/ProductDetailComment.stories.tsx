import ProductDetailComment from '.';

export default {
  component: ProductDetailComment,
  title: 'organisms/ProductDetailComment',
};

export const ProductDetailCommentBlock = () => (
  <ProductDetailComment
    username="박승빈"
    rating={4.2}
    date="2020.12.03"
    comment="이쁨,비쌈,인형 죠르디 붙어있음,꽃 다 빠짐 끝!"
    numOfLikes={20}
  />
);
