import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { colors } from 'theme';
import IconButton from '../IconButton';

type ProductImageCardProps = {
  img: string;
};

const ProductImageCard = ({ img }: ProductImageCardProps) => {
  return (
    <li css={container}>
      <Link to="/">
        <img
          src={
            img
              ? img
              : 'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa'
          }
          alt="상품이미지"
        />
      </Link>
      <IconButton
        name="basket"
        size={20}
        title="담기"
        fgColor={colors.adminBorderGray}
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
