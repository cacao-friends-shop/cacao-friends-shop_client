import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import AdminEdit from 'pages/AdminEdit';
import Header from 'components/organisms/Header';
import SortModal from 'components/organisms/SortModal';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      {/* <Header />
      <AdminEdit /> */}
      <SortModal />
    </>
  );
}

export default App;
