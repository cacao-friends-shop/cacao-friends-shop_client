import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';

import Header from 'components/organisms/Header';
import PostCard from 'components/organisms/PostCard';
import { imgList } from 'staticData';
import ActivityTemplate from 'pages/Activity/template';
import NewProduct from './pages/NewProduct/index';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />

      {/* <Header TabComp={TabComp} /> */}

      <NewProduct />
    </>
  );
}

export default App;
