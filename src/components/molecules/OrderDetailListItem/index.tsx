import { css } from '@emotion/react';
import TimeStemp from 'components/atoms/TimeStemp';
import React from 'react';
import { colors } from 'theme';
import ProductListItem from '../ProductListItem';

const OrderDetailListItem = () => {
  return (
    <li css={container}>
      <TimeStemp css={timeStempStyle} time="2021-05-07 16:07" />
      <ProductListItem
        tag="div"
        css={itemStyle}
        title="내 마음을 받아라이언"
        price={30000}
      >
        <span> / 1개</span>
      </ProductListItem>
    </li>
  );
};

const container = css`
  margin: 2rem auto;
  padding: 2rem 0;
  background: ${colors.white};
  box-shadow: 0 2px rgba(0, 0, 0, 0.05);
  span {
    font-weight: 600;
    display: inline-block !important;
  }
`;

const timeStempStyle = css`
  display: block;
  padding: 0 0 2rem;
`;

const itemStyle = css`
  padding: 2rem 0;
  border: none;
  border-top: 1px solid ${colors.adminBorderGray};

  a {
    pointer-events: none;
  }
  button {
    display: none;
  }
`;
export default OrderDetailListItem;
