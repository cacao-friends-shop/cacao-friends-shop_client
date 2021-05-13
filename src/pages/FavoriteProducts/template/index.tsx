import ProductImageCardList from 'components/organisms/ProductImageCardList/ProductImageCardList';
import ProductImageCardListType2 from 'components/organisms/ProductImageCardList/ProductImageCardListType2';
import ProductImageCardListType3 from 'components/organisms/ProductImageCardList/ProductImageCardListType3';
import React, { useEffect } from 'react';
import useFavoriteProductsImages from 'hooks/useFavoriteProductsImages';
import { v4 as uuid } from 'uuid';
import TabComp from 'components/molecules/TabComp';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'saga';
import { productsAsync } from 'modules/Product/actions';

const ProductImageCardListGroup = (imgs: string[]) => [
  <ProductImageCardList key={uuid()} imgList={imgs} />,
  <ProductImageCardListType3 key={uuid()} imgList={imgs} />,
  <ProductImageCardListType2 key={uuid()} imgList={imgs} />,
  <ProductImageCardListType3 key={uuid()} imgList={imgs} />,
];

const FavoriteProductsTemplate = () => {
  const { data } = useSelector((state: RootState) => state.product.products);
  const imgList = useFavoriteProductsImages(
    data ? data.content.map(product => product.thumbnailImageUrl) : []
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAsync.request());
  }, [dispatch]);

  if (!data) return null;
  return (
    <>
      <TabComp />
      <div css={{ maxWidth: '64rem', margin: '0 auto' }}>
        {imgList.map(
          (imgs: string[], i: number) => ProductImageCardListGroup(imgs)[i % 4]
        )}
      </div>
    </>
  );
};

export default FavoriteProductsTemplate;
