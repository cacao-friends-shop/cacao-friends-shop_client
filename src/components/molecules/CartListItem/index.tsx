import React from 'react';
import ProductListItem from 'components/molecules/ProductListItem';
import { css } from '@emotion/react';
import Icon from 'components/atoms/Icon';

type CartListItemProps = {
  /** 상품 이름 */
  title: string;
  /** 상품 가격 */
  price: number;
};

const CartListItem = ({ title, price }: CartListItemProps) => {
  return (
    <ProductListItem css={container} title={title} price={price}>
      <input type="number" />
      <label css={labelStyle}>
        <Icon name="checkCircle" size={23} />
        <input css={checkboxStyle} type="checkbox" />
      </label>
    </ProductListItem>
  );
};

const container = css`
  padding-left: 4.5rem;
  margin: 100px;

  input[type='number'] {
    margin-top: 2rem;
    height: 3rem;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 3px;
  }

  h2,
  span {
    font-weight: 500;
    color: black;
  }
`;

const labelStyle = css`
  position: absolute;
  top: 2rem;
  left: 1rem;
`;

const checkboxStyle = css`
  transform: translate3d(-27px, -2px, 0);
  width: 2rem;
  height: 2rem;
  opacity: 0;
  cursor: pointer;
`;

export default CartListItem;
