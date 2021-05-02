import React from 'react';
import ProductCard from 'components/molecules/ProductCard';
import { Grid } from '@chakra-ui/layout';

const ProductCardList = () => {
  return (
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
    </Grid>
  );
};

export default ProductCardList;
