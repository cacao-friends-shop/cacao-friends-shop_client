import Title from './';
import { css } from '@emotion/react';

export default {
  component: Title,
  title: 'atoms/Title',
};

// h1 타이틀
export const H1Title = () => (
  <Title css={h1style} headingNumber={1}>
    안녕하세요
  </Title>
);

// h2 타이틀
export const H2Title = () => (
  <Title css={h2style} headingNumber={2}>
    css prop 전달 가능
  </Title>
);

// h3 타이틀
export const H3Title = () => (
  <Title css={h3style} headingNumber={3}>
    css prop 으로 스타일 가능
  </Title>
);

const h1style = css`
  font-size: 24px;
  font-weight: bold;
`;

const h2style = css`
  font-size: 22px;
  font-weight: bold;
`;

const h3style = css`
  font-size: 20px;
  font-weight: bold;
`;
