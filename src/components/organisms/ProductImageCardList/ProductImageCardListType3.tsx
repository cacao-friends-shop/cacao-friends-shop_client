import { Grid, GridItem } from '@chakra-ui/layout';
import ProductImageCard from 'components/molecules/ProductImageCard';
import React from 'react';
import { Products } from 'types/Product';

type ProductImageCardListPropsType3 = {
  /** 이미지 리스트 */
  products: Products;
};

const ProductImageCardListType3 = ({
  products,
}: ProductImageCardListPropsType3) => {
  return (
    <Grid
      marginBottom={2}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      maxWidth="64rem"
      gap={2}
    >
      {products.map(product => (
        <GridItem key={product.id}>
          <ProductImageCard img={product.thumbnailImageUrl} to={product.id} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductImageCardListType3;
