import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../IconButton';

type ProductImageCardProps = {
  img: string;
};

const ProductImageCard = ({ img }: ProductImageCardProps) => {
  return (
    <li css={container}>
      <Link to="/">
        <img src={img} alt="상품이미지" />
      </Link>
      <IconButton
        name="basket"
        size={20}
        title="담기"
        fgColor="#fff"
        bgColor="rgba(0, 0, 0, 0.3)"
      />
    </li>
  );
};

const container = css`
  position: relative;
  display: inline-block;

  a {
    display: block;
  }

  button {
    padding: 0.3rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  img {
    width: 100%;
  }
`;

export default ProductImageCard;
