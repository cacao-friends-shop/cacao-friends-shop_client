import React from 'react';
import ProductListItem from 'components/molecules/ProductListItem';

const ProductList = () => {
  return (
    <ul>
      <ProductListItem imgPath="" title="내사랑을 받아라이언" price={30000} />
      {/* <ProductListItem title="내사랑을 받아라이언" price={30000} />
      <ProductListItem title="내사랑을 받아라이언" price={30000} />
      <ProductListItem title="내사랑을 받아라이언" price={30000} /> */}
    </ul>
  );
};

export default ProductList;
