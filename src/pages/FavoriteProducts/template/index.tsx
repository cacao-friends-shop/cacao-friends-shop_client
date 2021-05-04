import ProductImageCardList from 'components/organisms/ProductImageCardList/ProductImageCardList';
import ProductImageCardListType2 from 'components/organisms/ProductImageCardList/ProductImageCardListType2';
import React from 'react';
import imgListDivider from 'utils/imgListDivider';
import { v4 } from 'uuid';
import ProductImageCardListType3 from '../../../components/organisms/ProductImageCardList/ProductImageCardListType3';

const ProductImageCardListGroup = (imgs: string[]) => [
  <ProductImageCardList key={v4()} imgList={imgs} />,
  <ProductImageCardListType3 key={v4()} imgList={imgs} />,
  <ProductImageCardListType2 key={v4()} imgList={imgs} />,
  <ProductImageCardListType3 key={v4()} imgList={imgs} />,
];

const FavoriteProductsTemplate = () => {
  return (
    <div css={{ maxWidth: '64rem', margin: '0 auto' }}>
      {imgListDivider.map(
        (imgs: string[], i: number) => ProductImageCardListGroup(imgs)[i % 4]
      )}
    </div>
  );
};

export default FavoriteProductsTemplate;
