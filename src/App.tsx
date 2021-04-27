import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Profile from 'components/molecules/Profile';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Profile time="" imagePath="" alt="" title="" desc="" />
      <div className="App"></div>
    </>
  );
}

export default App;
