import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';

import Header from 'components/organisms/Header';
import PostDetailComment from 'components/organisms/PostDetailComment';
import PostDetail from 'pages/PostDetail/template';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />

      {/* <Header TabComp={TabComp} /> */}

      <Header />
      <PostDetail />
    </>
  );
}

export default App;
