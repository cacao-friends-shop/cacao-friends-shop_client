import { Grid, GridItem } from '@chakra-ui/layout';
import ProductImageCard from 'components/molecules/ProductImageCard';
import React from 'react';

type ProductImageCardListPropsType2 = {
  /** 이미지 리스트 */
  imgList: string[];
};

const ProductImageCardListType2 = ({
  imgList,
}: ProductImageCardListPropsType2) => {
  return (
    <Grid
      marginBottom={2}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      maxWidth="64rem"
      gap={2}
    >
      {imgList.map((img, i) => (
        <GridItem key={i} rowSpan={i === 1 ? 2 : 1} colSpan={i === 1 ? 2 : 1}>
          <ProductImageCard img={img} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductImageCardListType2;
