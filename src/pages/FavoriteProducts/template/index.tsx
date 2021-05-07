import ProductImageCardList from 'components/organisms/ProductImageCardList/ProductImageCardList';
import ProductImageCardListType2 from 'components/organisms/ProductImageCardList/ProductImageCardListType2';
import ProductImageCardListType3 from 'components/organisms/ProductImageCardList/ProductImageCardListType3';
import React from 'react';
import imgListDivider from 'utils/imgListDivider';
import { v4 as uuid } from 'uuid';
import Header from 'components/organisms/Header';
import TabComp from 'components/molecules/TabComp';

const ProductImageCardListGroup = (imgs: string[]) => [
  <ProductImageCardList key={uuid()} imgList={imgs} />,
  <ProductImageCardListType3 key={uuid()} imgList={imgs} />,
  <ProductImageCardListType2 key={uuid()} imgList={imgs} />,
  <ProductImageCardListType3 key={uuid()} imgList={imgs} />,
];

const FavoriteProductsTemplate = () => {
  return (
    <>
      <Header TabComp={TabComp}></Header>
      <div css={{ maxWidth: '64rem', margin: '0 auto' }}>
        {imgListDivider.map(
          (imgs: string[], i: number) => ProductImageCardListGroup(imgs)[i % 4]
        )}
      </div>
    </>
  );
};

export default FavoriteProductsTemplate;
