import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import NewProductTemplate from 'pages/NewProduct/template';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <NewProductTemplate />
    </>
  );
}

export default App;
