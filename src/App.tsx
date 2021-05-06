import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />

      {/* <Header TabComp={TabComp} /> */}
    </>
  );
}

export default App;
