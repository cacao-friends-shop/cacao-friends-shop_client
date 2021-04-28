import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../IconButton';

type ProductCardProps = {
  // imgPath: string;
  // title: string;
  // price: number;
};

const ProductCard = ({}: ProductCardProps) => {
  return (
    <li css={container}>
      <Link to="/go">
        <span css={imgContainer}>
          <img
            src="https://t1.daumcdn.net/friends/prod/product/20210421145731862_8809721508497_AW_00.jpg?type=thumb&opt=R255x255@2xa"
            alt="상품 이미지"
          />
        </span>
        <h3>리틀라이언 미니베이커</h3>
        <span css={priceStyle}>
          39,900<span>원</span>
        </span>
      </Link>
      <div css={buttonConainer}>
        <IconButton name="basket" size={25} fgColor="#aaa" title="담기" />
      </div>
    </li>
  );
};

const container = css`
  position: relative;
  display: inline-block;

  h3 {
    max-width: 17rem;
    color: #aaa;
    font-weight: 400;
    font-size: 1.6rem;
    margin: 1.3rem 0 1rem;
    line-height: 1.2;
  }

  a {
    display: block;
  }
`;

const imgContainer = css`
  display: block;
  background-color: rgba(0, 0, 0, 0.02);
  height: 100%;
  box-sizing: border-box;

  &::after {
    position: absolute;
    background: rgba(0, 0, 0, 0.02);
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 100%;
  }
  img {
    width: 100%;
  }
`;

const buttonConainer = css`
  position: absolute;
  right: 0;
  top: 27.5rem;
`;

const priceStyle = css`
  font-weight: bold;
`;
export default ProductCard;
