import { css } from '@emotion/react';
import Carousel from 'components/organisms/Carousel';
import ProductCardList from 'components/organisms/ProductCardList';
import useCarouselState from 'hooks/useCarouselState';
import React, { useEffect } from 'react';
import TabComp from 'components/molecules/TabComp';
import { colors } from 'theme';
import { productsAsync } from 'modules/Product/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'saga';
import { imageList } from 'staticData';

type NewProductTemplateProps = {
  // products: ProductsState;
};

const NewProductTemplate = () => {
  const { ryan, neo, muzi, prodo, apitch } = useSelector(
    (state: RootState) => state.product.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAsync.request('네오', 'neo'));
    dispatch(productsAsync.request('라이언', 'ryan'));
    dispatch(productsAsync.request('무지', 'muzi'));
    dispatch(productsAsync.request('어피치', 'apitch'));
    dispatch(productsAsync.request('프로도', 'prodo'));
  }, [dispatch]);
  const {
    currentIdx,
    direction,
    handleNext,
    handlePrev,
    imgList,
  } = useCarouselState(imageList);

  useEffect(() => {
    console.log(ryan, neo, muzi, prodo, apitch);
  }, [ryan, neo, muzi, prodo, apitch]);
  return (
    <>
      <TabComp />
      <div css={container}>
        <Carousel
          imgList={imgList}
          currentIdx={currentIdx}
          direction={direction}
          handleNext={handleNext}
          handlePrev={handlePrev}
          css={carouselStyle}
        >
          <div css={textContainer}>
            {/* <h3>{ryan.data?.content[currentIdx].title}</h3> */}
          </div>
          <span css={textStyle}>
            {currentIdx + 1} / {imgList.length}
          </span>
        </Carousel>
        <div css={productContainer}>
          <ProductCardList
            characterName="라이언"
            products={ryan.data?.content}
          />
          <ProductCardList
            characterName="어피치"
            products={apitch.data?.content}
          />
          <ProductCardList characterName="무지" products={muzi.data?.content} />
          <ProductCardList
            characterName="프로도"
            products={prodo.data?.content}
          />
          <ProductCardList characterName="네오" products={neo.data?.content} />
        </div>
      </div>
    </>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
`;
const carouselStyle = css`
  position: relative;
  height: 30rem;
  border-radius: 0;
`;

const productContainer = css`
  padding: 2rem;
`;

const textContainer = css`
  position: absolute;
  line-height: 1.5;
  bottom: 2rem;
  left: 2rem;
`;

const textStyle = css`
  position: absolute;
  line-height: 1.5;
  color: ${colors.white};
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px;
  font-size: 1.5rem;
  bottom: 2rem;
  right: 2rem;
`;
export default NewProductTemplate;
