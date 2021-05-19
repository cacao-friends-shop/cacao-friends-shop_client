import { css } from '@emotion/react';
import Indicator from 'components/atoms/Indicator';
import Rating from 'components/molecules/Rating';
import React, { useState } from 'react';
import { colors, fontSizes } from 'theme';
import Carousel from '../Carousel';

export type productDetailInfoProps = {
  productName: string;
  price: string;
  rating: number;
  imageList: string[];
};

const ProductDetailInfo = ({
  productName,
  price,
  rating,
  imageList,
}: productDetailInfoProps) => {
  const [[currentIdx, direction], setSlide] = useState([0, 0]);

  const slideMove = (newDirection: number) => {
    setSlide([currentIdx + newDirection, newDirection]);
  };

  const handlePrev = () => {
    if (currentIdx <= 0) return;
    slideMove(-1);
  };

  const handleNext = () => {
    if (currentIdx >= imageList.length - 1) return;
    slideMove(1);
  };
  return (
    <article css={productDetailContainer}>
      <Carousel
        imgList={imageList}
        direction={direction}
        currentIdx={currentIdx}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <Indicator imgLength={imageList.length} currentIdx={currentIdx} />
      <h2>{productName}</h2>
      <span>{price}원</span>
      <Rating numOfReviews={rating}>(7)</Rating>
    </article>
  );
};

const productDetailContainer = css`
  h2 {
    font-size: 3rem;
    line-height: 1.2;
    max-width: 50rem;
    padding: 3rem 2rem 1.2rem;
  }
  span {
    font-size: ${fontSizes.base_16};
    font-weight: normal;
    margin-bottom: 2rem;
    display: inline-block;
    padding: 0 2rem;
  }
  span + div {
    padding: 0 2rem;
  }
  ul {
    display: flex;
    justify-content: center;
  }

  li {
    background: ${colors.white};
    border: 1px solid ${colors.gray};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  li + li {
    margin-left: 1rem;
  }
  li.active {
    background: ${colors.gray};
    transform: scale(1.5);
  }
`;

export default ProductDetailInfo;
