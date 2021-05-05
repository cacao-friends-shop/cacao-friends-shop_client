import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/organisms/Header';
import MyTab from 'components/molecules/MyTab';
import TabComp from 'components/molecules/TabComp';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <TabComp />
      <MyTab />
    </>
  );
}

export default App;
