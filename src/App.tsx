import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/organisms/Header';
import AdminList from 'pages/AdminList';
import Home from 'pages/Home';
import TabComp from 'components/molecules/TabComp';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header TabComp={TabComp} />
      <Home />
    </>
  );
}

export default App;
