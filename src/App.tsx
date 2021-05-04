import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import CommentInfo from 'components/molecules/CommentInfo';
import AdminEdit from 'pages/AdminEdit';
import Header from 'components/organisms/Header';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <AdminEdit />
    </>
  );
}

export default App;
