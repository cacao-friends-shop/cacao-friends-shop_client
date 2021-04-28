import { Grid, GridItem } from '@chakra-ui/layout';
import ProductImageCard from 'components/molecules/ProductImageCard';
import React from 'react';

type ProductImageCardListPropsType3 = {
  /** 이미지 리스트 */
  imgList: string[];
};

const ProductImageCardListType3 = ({
  imgList,
}: ProductImageCardListPropsType3) => {
  return (
    <Grid
      marginBottom={2}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      maxWidth="60rem"
      gap={2}
    >
      {imgList.map((img, i) => (
        <GridItem key={i}>
          <ProductImageCard img={img} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductImageCardListType3;
