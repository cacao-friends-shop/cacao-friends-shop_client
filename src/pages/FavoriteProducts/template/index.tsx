import ProductImageCardList from 'components/organisms/ProductImageCardList/ProductImageCardList';
import ProductImageCardListType2 from 'components/organisms/ProductImageCardList/ProductImageCardListType2';
import ProductImageCardListType3 from 'components/organisms/ProductImageCardList/ProductImageCardListType3';
import React, { useEffect, useRef } from 'react';
import useFavoriteProductsImages from 'hooks/useFavoriteProductsImages';
import TabComp from 'components/molecules/TabComp';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'saga';
import { loadMoreProductAsync, productsAsync } from 'modules/Product/actions';
import { Products } from 'types/Product';

const ProductImageCardListGroup = (
  imgs: string[],
  products: Products,
  i: number
) => [
  <ProductImageCardList key={products[i].id} imgList={imgs} />,
  <ProductImageCardListType3 key={products[i].id} imgList={imgs} />,
  <ProductImageCardListType2 key={products[i].id} imgList={imgs} />,
  <ProductImageCardListType3 key={products[i].id} imgList={imgs} />,
];

const FavoriteProductsTemplate = () => {
  const { data } = useSelector((state: RootState) => state.product.products);
  const imgList = useFavoriteProductsImages(
    data ? data.content.map(product => product.thumbnailImageUrl) : []
  );
  const pageRef = useRef(1);
  const dispatch = useDispatch();

  const onScroll = () => {
    if (!data) return;
    const {
      scrollHeight,
      scrollTop,
      clientHeight,
    } = document.scrollingElement as Element;

    if (scrollTop + clientHeight >= scrollHeight * 0.9) {
      dispatch(
        loadMoreProductAsync.request(
          pageRef.current <= data.totalPages
            ? pageRef.current++
            : pageRef.current
        )
      );
    }
  };

  useEffect(() => {
    dispatch(productsAsync.request());
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  });

  if (!data) return null;
  return (
    <>
      <TabComp />
      <div css={{ maxWidth: '64rem', margin: '0 auto' }}>
        {imgList.map(
          (imgs: string[], i: number) =>
            ProductImageCardListGroup(imgs, data.content, i)[i % 4]
        )}
      </div>
    </>
  );
};

export default FavoriteProductsTemplate;
