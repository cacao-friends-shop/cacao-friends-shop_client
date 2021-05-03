import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/organisms/Header';
import TabComp from 'components/molecules/TabComp';
import ProductListItem from 'components/molecules/ProductListItem';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ProductListItem title="내사랑을 받아라이언" price={32000} />
      <ProductListItem title="내사랑을 받아라이언" price={32000} />
      {/* <Header TabComp={TabComp} /> */}
    </>
  );
}

export default App;
