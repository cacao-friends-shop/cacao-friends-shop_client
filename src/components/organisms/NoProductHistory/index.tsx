import React from 'react';
import { css } from '@emotion/react';
import { colors, fontSizes } from 'theme';

const NoProductHistory = () => {
  return (
    <section css={container}>
      <img
        src={process.env.PUBLIC_URL + './assets/no_product_history.png'}
        alt="카카오 라이언 이미지 "
      />
      <p>내역이 없어요</p>
    </section>
  );
};

const container = css`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 64rem;
  background-color: ${colors.myTabGray};
  p {
    font-size: ${fontSizes.base_16};
    color: rgb(154, 154, 158);
  }
`;
export default NoProductHistory;
