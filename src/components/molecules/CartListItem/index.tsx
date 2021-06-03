import React, { useState } from 'react';
import ProductListItem from 'components/molecules/ProductListItem';
import { css } from '@emotion/react';
import CircleCheckbox from '../CircleCheckbox';
import { colors } from 'theme';
import { useDispatch } from 'react-redux';
import { deleteCarts } from 'modules/carts/cartsSlice';

type CartListItemProps = {
  /** 상품 이름 */
  title: string;
  /** 상품 가격 */
  price: number;
  imgPath: string;
  amount: number;
  id: number;
};

const CartListItem = ({
  title,
  price,
  imgPath,
  amount,
  id,
}: CartListItemProps) => {
  const [value, setValue] = useState(amount);
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);

  const handleDeleteCartItem = () => {
    dispatch(deleteCarts(id));
  };

  return (
    <ProductListItem
      imgPath={imgPath}
      css={container}
      title={title}
      price={price}
      handleDeleteCartItem={handleDeleteCartItem}
    >
      <input type="number" value={value} onChange={handleChange} />
      <CircleCheckbox />
    </ProductListItem>
  );
};

const container = css`
  padding-left: 4.5rem;

  a {
    pointer-events: none;
  }

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
