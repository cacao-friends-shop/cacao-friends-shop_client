import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';

import Header from 'components/organisms/Header';
import PostCard from 'components/organisms/PostCard';
import { imgList } from 'staticData';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />

      {/* <Header TabComp={TabComp} /> */}

      <Header />
      <PostCard imgList={imgList} />
    </>
  );
}

export default App;
