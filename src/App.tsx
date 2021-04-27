import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import SideBar from 'components/organisms/SideBar';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <div className="App">
        <SideBar />
      </div>
    </>
  );
}

export default App;
