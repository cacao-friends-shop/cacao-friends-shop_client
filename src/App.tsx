import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Profile from 'components/molecules/Profile';
import Carousel from 'components/organisms/Carousel';
import Indicator from 'components/atoms/Indicator';
import Actionbar from 'components/molecules/Actionbar/Actionbar';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Actionbar />
    </>
  );
}

export default App;
