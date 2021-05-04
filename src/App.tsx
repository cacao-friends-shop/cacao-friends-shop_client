import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/organisms/Header';
import TabComp from 'components/molecules/TabComp';
import ProductListItem from 'components/molecules/ProductListItem';
import DeletebarBase from 'components/molecules/DeletebarBase';
import CartListDeletebar from 'components/molecules/CartListDeletebar';
import RecentlySeeTemplate from './pages/RecentlySee/template/index';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <RecentlySeeTemplate />
      {/* <Header TabComp={TabComp} /> */}
    </>
  );
}

export default App;
