import TabComp from 'components/molecules/TabComp';
import ProductImageCardList from 'components/organisms/ProductImageCardList/ProductImageCardList';
import ProductImageCardListType2 from 'components/organisms/ProductImageCardList/ProductImageCardListType2';
import ProductImageCardListType3 from 'components/organisms/ProductImageCardList/ProductImageCardListType3';
import useFavoriteProductsState from 'hooks/useFavoriteProductsState';
import { RootState } from 'modules';
import {
  favoriteProductAsync,
  loadMoreProductAsync,
} from 'modules/favorite/actions';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Products } from 'types/Product';
import React from 'react';
import { debounce } from 'utils/debounce';

const ProductImageCardListGroup = (products: Products, i: number) => [
  <ProductImageCardList key={products[0].id} products={products} />,
  <ProductImageCardListType3 key={products[0].id} products={products} />,
  <ProductImageCardListType2 key={products[0].id} products={products} />,
  <ProductImageCardListType3 key={products[0].id} products={products} />,
];

const FavoriteProductsTemplate = () => {
  const { data: favoriteData } = useSelector(
    (state: RootState) => state.favorite
  );

  const favoriteProductsState = useFavoriteProductsState(
    favoriteData ? favoriteData.content : []
  );

  const pageRef = useRef(2);
  const dispatch = useDispatch();

  const onScroll = () => {
    if (!favoriteData) return;
    const {
      scrollHeight,
      scrollTop,
      clientHeight,
    } = document.scrollingElement as Element;
    if (scrollTop + clientHeight >= scrollHeight * 0.8) {
      dispatch(
        loadMoreProductAsync.request(
          pageRef.current <= favoriteData.totalPages
            ? pageRef.current++
            : pageRef.current
        )
      );
    }
  };
  useEffect(() => {
    dispatch(favoriteProductAsync.request(1));
  }, [dispatch]);

  useEffect(() => {
    document.onscroll = debounce(onScroll, 300);
    return () => {
      document.onscroll = null;
    };
  });

  if (!favoriteData?.content) return null;
  return (
    <>
      <TabComp />
      <div css={{ maxWidth: '64rem', margin: '0 auto' }}>
        {favoriteProductsState.map((products: Products, i: number) => {
          return ProductImageCardListGroup(products, i)[i % 4];
        })}
      </div>
    </>
  );
};

export default FavoriteProductsTemplate;
