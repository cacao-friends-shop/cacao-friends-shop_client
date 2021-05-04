import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/organisms/Header';
import TabComp from 'components/molecules/TabComp';
import ProductListItem from 'components/molecules/ProductListItem';
import DeletebarBase from 'components/molecules/DeletebarBase';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <DeletebarBase deleteMsg="전체삭제">
        최근 50개까지 저장됩니다
      </DeletebarBase>
      {/* <Header TabComp={TabComp} /> */}
    </>
  );
}

export default App;
