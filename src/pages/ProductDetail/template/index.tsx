import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import Navbar from 'components/molecules/Navbar';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';
import ProductDetailInfo from 'components/organisms/ProductDetailInfo';
import ProductDetailReview from 'components/organisms/ProductDetailReview';
import Button from 'components/atoms/Button';
import IconButton from 'components/molecules/IconButton';
import { colors, fontSizes } from 'theme';
import ModalOverlay from 'components/atoms/ModalOverlay';
import { Select } from '@chakra-ui/react';

const productInfo = {
  productName: '리틀라이언 미니베이커',
  price: 39900,
  rating: 4.3,
  imageList: [
    'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg',
    'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_1_20210426185905.jpg',
    'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_2_20210426185905.jpg',
  ],
};
const numberWithCommas = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const ProductDetail = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      if (isOpen) document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <ModalOverlay
          css={overlayStyle}
          bgColor={colors.black}
          opacity={0.6}
        ></ModalOverlay>
      )}
      <Navbar title="제품 상세" />
      <main css={container}>
        <A11yHiddenHeading comp="h2">제품 상세</A11yHiddenHeading>
        <ProductDetailInfo
          productName={productInfo.productName}
          rating={productInfo.rating}
          price={productInfo.price}
          imageList={productInfo.imageList}
        />
        <ProductDetailReview numOfReviews={4.8} />
        {isOpen && (
          <div css={priceAndQuantityContainer}>
            <Select>
              {[...Array(30).keys()].map(idx => {
                return (
                  <option key={idx} value={idx + 1}>
                    {idx + 1}
                  </option>
                );
              })}
            </Select>
            <span>{numberWithCommas(productInfo.price)}원</span>
          </div>
        )}
        <Button
          css={basketBtnStyle}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p>
            바로구매<IconButton name="basket" size={24}></IconButton>
          </p>
        </Button>
      </main>
    </>
  );
};

const container = css`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
`;

const basketBtnStyle = css`
  position: fixed;
  bottom: 0;
  max-width: 64rem;
  height: 6.7rem;
  z-index: 11000;
  p {
    font-size: ${fontSizes.lg_18};
    letter-spacing: normal;
    padding: 0 5rem;
    position: relative;
    color: ${colors.white};
  }
  svg {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    color: ${colors.white};
  }
  path {
    fill: currentColor;
  }
`;
const priceAndQuantityContainer = css`
  background-color: ${colors.white};
  width: 100%;
  max-width: 64rem;
  position: fixed;
  bottom: 6.7rem;
  z-index: 11000;
  height: 6.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  select {
    font-size: ${fontSizes.xs_14};
    line-height: 1.5;
    width: 8rem;
    height: 3.6rem;
    border-radius: 0.4rem;
  }
  select + div {
    display: none;
  }

  span {
    display: flex;
    justify-content: flex-end;
    min-width: 20rem;
    font-size: ${fontSizes.xl_20};
    color: ${colors.black};
    font-weight: bold;
  }
`;
const overlayStyle = css`
  z-index: 10000;
`;
export default ProductDetail;
