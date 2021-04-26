import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import IconButton from 'components/molecules/IconButton';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <IconButton name="search" />
      <div className="App"></div>
    </>
  );
}

export default App;
