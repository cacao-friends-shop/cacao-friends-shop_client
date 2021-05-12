import { css } from '@emotion/react';
import Carousel from 'components/organisms/Carousel';
import ProductCardList from 'components/organisms/ProductCardList';
import useCarouselState from 'hooks/useCarouselState';
import React from 'react';
import Header from 'components/organisms/Header';
import TabComp from 'components/molecules/TabComp';

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
    <>
      <Header TabComp={TabComp}></Header>
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
          <span css={textStyle}>
            {currentIdx + 1} / {imageList.length}
          </span>
        </Carousel>
        <div css={productContainer}>
          <ProductCardList characterName="라이언" />
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
  color: #fff;
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
