import React, { useEffect } from 'react';
import ProductCard from 'components/molecules/ProductCard';
import { Grid } from '@chakra-ui/layout';
import Button from 'components/atoms/Button';
import { css } from '@emotion/react';
import { colors, fontSizes } from 'theme';
import { Product } from 'modules/Product/types';

type ProductCardListProps = {
  characterName: string;
  products: Product[];
};

const ProductCardList = ({ characterName, products }: ProductCardListProps) => {
  return (
    <>
      <h2 css={{ marginBottom: '2rem', fontSize: '2.5rem' }}>
        {characterName}
      </h2>
      <Grid
        as="ul"
        templateColumns="repeat(2, 1fr)"
        gap={20}
        rowGap={60}
        maxWidth="64rem"
      >
        {products.map(({ id, title, price, thumbnailImageUrl }: Product) => (
          <ProductCard
            key={id}
            title={title}
            price={price}
            imgPath={thumbnailImageUrl}
          />
        ))}
      </Grid>

      <Button css={buttonStyle}>더 보기 +</Button>
    </>
  );
};

const buttonStyle = css`
  display: block;
  background: ${colors.white};
  font-size: ${fontSizes.lg_18};
  font-weight: bold;
  border: 1px solid ${colors.adminBorderGray};
  border-radius: 4px;
  width: 40rem;
  margin: 4rem auto;
`;

export default ProductCardList;
