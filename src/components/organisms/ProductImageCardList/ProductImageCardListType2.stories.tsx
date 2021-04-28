import ProductImageCardListType2 from './ProductImageCardListType2';

export default {
  component: ProductImageCardListType2,
  title: 'organisms/ProductImageCardListType2',
};
const imageList = [
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
];

// 기본 포스트 카드
export const DefaultProductImageCardListType2 = () => (
  <ProductImageCardListType2 imgList={imageList} />
);
