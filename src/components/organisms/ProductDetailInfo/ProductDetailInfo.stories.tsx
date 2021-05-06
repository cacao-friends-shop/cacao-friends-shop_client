import ProductDetailInfo from '.';

export default {
  component: ProductDetailInfo,
  title: 'organisms/ProductDetailInfo',
};

const imageList = [
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_1_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_2_20210426185905.jpg',
];

export const ProductDetailInfoBlock = () => (
  <ProductDetailInfo
    productName="내 마음을 받아죠르디"
    price="32,000"
    imageList={imageList}
  />
);
