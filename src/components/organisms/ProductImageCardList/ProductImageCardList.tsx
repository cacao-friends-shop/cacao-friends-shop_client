import { Grid, GridItem } from '@chakra-ui/layout';
import ProductImageCard from 'components/molecules/ProductImageCard';
import React from 'react';
import { Products } from 'types/Product';

type ProductImageCardListProps = {
  /** 이미지 리스트 */
  products: Products;
};

const ProductImageCardList = ({ products }: ProductImageCardListProps) => {
  return (
    <Grid
      marginBottom={2}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      maxWidth="64rem"
      gap={2}
    >
      {products.map((product, i) => (
        <GridItem
          key={product.id}
          rowSpan={i === 0 ? 2 : 1}
          colSpan={i === 0 ? 2 : 1}
        >
          <ProductImageCard img={product.thumbnailImageUrl} to={product.id} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductImageCardList;
