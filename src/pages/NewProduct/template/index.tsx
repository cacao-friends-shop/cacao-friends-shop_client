import { css } from '@emotion/react';
import Carousel from 'components/organisms/Carousel';
import ProductCardList from 'components/organisms/ProductCardList';
import useCarouselState from 'hooks/useCarouselState';
import React from 'react';
import Header from 'components/organisms/Header';
import TabComp from 'components/molecules/TabComp';
import { Product, Products } from 'modules/Product/types';

type NewProductTemplateProps = {
  products: Products;
};

const NewProductTemplate = ({ products }: NewProductTemplateProps) => {
  const {
    currentIdx,
    direction,
    handleNext,
    handlePrev,
    imgList,
  } = useCarouselState(
    products.map((product: Product) => product.thumbnailImageUrl)
  );

  return (
    <>
      <Header TabComp={TabComp}></Header>
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
            <h3>{products[currentIdx].title}</h3>
          </div>
          <span css={textStyle}>
            {currentIdx + 1} / {imgList.length}
          </span>
        </Carousel>
        <div css={productContainer}>
          <ProductCardList characterName="라이언" products={products} />
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
  color: #fff;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px;
  font-size: 1.5rem;
  bottom: 2rem;
  right: 2rem;
`;
export default NewProductTemplate;
