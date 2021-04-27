import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Profile from 'components/molecules/Profile';
import Carousel from 'components/organisms/Carousel';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
    </>
  );
}

export default App;
