import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/organisms/Header';
import TabComp from 'components/molecules/TabComp';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header TabComp={TabComp} />
    </>
  );
}

export default App;
