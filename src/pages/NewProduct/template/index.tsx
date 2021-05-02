import { css } from '@emotion/react';
import Carousel from 'components/organisms/Carousel';
import ProductCardList from 'components/organisms/ProductCardList';
import useCarouselState from 'hooks/useCarouselState';
import React from 'react';

const imageList = [
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
];

const NewProductTemplate = () => {
  const { currentIdx, direction, handleNext, handlePrev } = useCarouselState(
    imageList
  );
  return (
    <div css={container}>
      <Carousel
        imgList={imageList}
        currentIdx={currentIdx}
        direction={direction}
        handleNext={handleNext}
        handlePrev={handlePrev}
        css={carouselStyle}
      >
        <div css={textContainer}>
          <h3>홈카페가 필요해</h3>
          <p>지구를 생각하는 일상</p>
        </div>
      </Carousel>
      <div css={productContainer}>
        <h2 css={{ marginBottom: '2rem', fontSize: '2rem' }}>상품 목록</h2>
        <ProductCardList />
      </div>
    </div>
  );
};

const container = css`
  max-width: 55rem;
  margin: 0 auto;
`;
const carouselStyle = css`
  position: relative;
  height: 30rem;
`;

const productContainer = css`
  padding: 2rem;
`;

const textContainer = css`
  position: absolute;
  line-height: 1.5;
  color: #fff;
  bottom: 2rem;
  left: 2rem;
`;
export default NewProductTemplate;
