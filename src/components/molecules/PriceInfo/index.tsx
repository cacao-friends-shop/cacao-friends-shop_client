import { css } from '@emotion/react';
import React from 'react';
import { fontSizes } from 'theme';

type PriceInfoProps = {
  /** 총 가격 */
  totalPrice: number;
};

const PriceInfo = ({ totalPrice }: PriceInfoProps) => {
  return (
    <div css={infoContainer}>
      <div>
        <span>총 주문금액</span> <span>{totalPrice}원</span>
      </div>
      <div>
        <span>배송비</span> <span>무료</span>
      </div>
      <div>
        <em>총 결제금액</em> <strong>{totalPrice}원</strong>
      </div>
    </div>
  );
};

const infoContainer = css`
  padding: 2rem 2rem 10rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    em,
    strong {
      font-style: normal;
      font-weight: 900;
    }

    strong {
      font-size: ${fontSizes.xl_20};
    }
  }
`;
export default PriceInfo;
