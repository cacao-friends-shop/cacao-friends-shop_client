import React from 'react';
import ProductListItem from 'components/molecules/ProductListItem';
import { css } from '@emotion/react';
import CircleCheckbox from '../CircleCheckbox';

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
      <CircleCheckbox />
    </ProductListItem>
  );
};

const container = css`
  padding-left: 4.5rem;

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

export default CartListItem;
