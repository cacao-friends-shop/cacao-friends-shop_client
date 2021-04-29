import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import { Route } from 'react-router-dom';
import TabComp from 'components/molecules/TabComp';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Route path="/today" component={TabComp} />
      <Route path="/new" component={TabComp} />
    </>
  );
}

export default App;
