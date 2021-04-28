import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/organisms/Header';
import AdminList from 'pages/AdminList';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <AdminList />
    </>
  );
}

export default App;
