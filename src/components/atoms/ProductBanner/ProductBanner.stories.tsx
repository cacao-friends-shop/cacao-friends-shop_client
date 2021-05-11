import ProductBanner from './index';

export default {
  component: ProductBanner,
  title: 'atoms/ProductBanner',
};

const productList = [
  { title: '라이언', imgURL: 'assets/Category_Ryan.jpg' },
  { title: '어피치', imgURL: 'assets/Category_Apeach.jpg' },
  { title: '프로도', imgURL: 'assets/Category_Frodo.jpg' },
  { title: '무지', imgURL: 'assets/Category_Muzi.jpg' },
  { title: '네오', imgURL: 'assets/Category_Neo.jpg' },
];

export const productBannerList = () => (
  <ul>
    {productList.map(product => (
      <ProductBanner title={product.title} imgURL={product.imgURL} />
    ))}
  </ul>
);
