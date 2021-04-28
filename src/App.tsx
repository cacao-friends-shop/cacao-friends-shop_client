import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import ProductImageCardList from 'components/organisms/ProductImageCardList/ProductImageCardList';
import ProductImageCardListType2 from 'components/organisms/ProductImageCardList/ProductImageCardListType2';
import ProductImageCardListType3 from 'components/organisms/ProductImageCardList/ProductImageCardListType3';
import imgListDivider from 'hooks/imgListDivider';

const ProductImageCardListGroup = (img: string[], i: number) => [
  <ProductImageCardList key={'type1 - ' + i} imgList={img} />,
  <ProductImageCardListType3 key={'type3 - ' + i} imgList={img} />,
  <ProductImageCardListType2 key={'type2 - ' + i} imgList={img} />,
  <ProductImageCardListType3 key={'type3 - ' + i} imgList={img} />,
];

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      {imgListDivider.map(
        (img: string[], i: number) => ProductImageCardListGroup(img, i)[i % 4]
      )}
    </>
  );
}

export default App;
