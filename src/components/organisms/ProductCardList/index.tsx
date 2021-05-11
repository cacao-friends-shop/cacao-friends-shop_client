import React from 'react';
import ProductCard from 'components/molecules/ProductCard';
import { Grid } from '@chakra-ui/layout';
import Button from 'components/atoms/Button';
import { css } from '@emotion/react';
import { fontSizes } from 'theme';

const ProductCardList = () => {
  return (
    <>
      <h2 css={{ marginBottom: '2rem', fontSize: '2.5rem' }}>라이언</h2>
      <Grid
        as="ul"
        templateColumns="repeat(2, 1fr)"
        gap={20}
        rowGap={60}
        maxWidth="64rem"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>

      <Button css={buttonStyle}>더 보기 +</Button>
    </>
  );
};

const buttonStyle = css`
  display: block;
  background: #fff;
  font-size: ${fontSizes.lg_18};
  font-weight: bold;
  border: 1px solid #eee;
  border-radius: 4px;
  width: 40rem;
  margin: 4rem auto;
`;

export default ProductCardList;
