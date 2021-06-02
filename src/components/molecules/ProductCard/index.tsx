import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Carts } from 'types/Carts';
import IconButton from '../IconButton';

type ProductCardProps = {
  id: number;
  imgPath: string;
  title: string;
  price: string;
  cartProducts: Carts[] | null;
};

const ProductCard = ({
  id,
  imgPath,
  title,
  price,
  cartProducts,
}: ProductCardProps) => {
  const isInTheCart = cartProducts?.find(
    cartProducts => cartProducts.product.id === id
  );

  return (
    <li css={container}>
      <Link to={`/product/${id}`}>
        <span css={imgContainer}>
          <img
            src={
              imgPath
                ? imgPath
                : 'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa'
            }
            alt={title}
          />
        </span>
        <h3>{title}</h3>
        <span css={priceStyle}>
          {price}
          <span>원</span>
        </span>
      </Link>
      <div css={buttonConainer}>
        <IconButton
          name={isInTheCart ? 'fillbasket' : 'basket'}
          size={25}
          fgColor={isInTheCart ? 'red' : '#aaa'}
          title="담기"
        />
      </div>
    </li>
  );
};

const container = css`
  position: relative;
  display: inline-block;

  h3 {
    max-width: 80%;
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
  top: 30rem;
  margin-left: 10px;
`;

const priceStyle = css`
  font-weight: bold;
`;
export default ProductCard;
