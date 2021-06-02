import React, { useState } from 'react';
import ProductListItem from 'components/molecules/ProductListItem';
import { css } from '@emotion/react';
import CircleCheckbox from '../CircleCheckbox';
import { colors } from 'theme';

type CartListItemProps = {
  /** 상품 이름 */
  title: string;
  /** 상품 가격 */
  price: number;
  imgPath: string;
  amount: number;
};

const CartListItem = ({ title, price, imgPath, amount }: CartListItemProps) => {
  const [value, setValue] = useState(amount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);
  return (
    <ProductListItem
      imgPath={imgPath}
      css={container}
      title={title}
      price={price}
    >
      <input type="number" value={value} onChange={handleChange} />
      <CircleCheckbox />
    </ProductListItem>
  );
};

const container = css`
  padding-left: 4.5rem;

  input[type='number'] {
    margin-top: 2rem;
    height: 3rem;
    border: 1px solid ${colors.adminBorderGray};
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
