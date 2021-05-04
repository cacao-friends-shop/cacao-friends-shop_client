import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/organisms/Header';
import TabComp from 'components/molecules/TabComp';
import ProductListItem from 'components/molecules/ProductListItem';
import DeletebarBase from 'components/molecules/DeletebarBase';
import CartListDeletebar from 'components/molecules/CartListDeletebar';
import RecentlySeeTemplate from './pages/RecentlySee/template/index';
import CartTemplate from 'pages/Cart/template';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <CartTemplate />
      {/* <Header TabComp={TabComp} /> */}
    </>
  );
}

export default App;
