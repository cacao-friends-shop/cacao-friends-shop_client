import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../IconButton';

type ProductListItemProps = {
  /** 상품 이름 */
  title: string;
  /** 상품 가격 */
  price: number;
  children?: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;

const ProductListItem = ({
  title,
  price,
  children,
  ...restProps
}: ProductListItemProps) => {
  return (
    <li css={container} {...restProps}>
      <Link to="/" css={imgContainer}>
        <img
          src="https://t1.daumcdn.net/friends/prod/product/20210421145731862_8809721508497_AW_00.jpg?type=thumb&opt=R255x255@2xa"
          alt="img"
        />
      </Link>
      <div css={textContainer}>
        <h3>{title}</h3>
        <span>{price}원</span>
        {children}
      </div>
      <IconButton css={buttonStyle} name="close" size={20} />
    </li>
  );
};

const container = css`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid rgb(242, 242, 242);
  padding: 2.5rem;
  position: relative;
`;

const imgContainer = css`
  display: block;
  background-color: rgba(0, 0, 0, 0.02);
  width: 10rem;
  box-sizing: border-box;
  position: relative;
  margin-right: 2rem;
  flex-shrink: 0;
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

const textContainer = css`
  flex: 1;
  h3,
  span {
    font-size: 1.6rem;
  }

  h3 {
    color: #777;
    font-weight: 400;
    margin: 1rem 0;
  }

  span {
    display: block;
    font-weight: 900;
  }
`;

const buttonStyle = css`
  color: #777;
`;

export default ProductListItem;
