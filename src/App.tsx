import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import IconLink from 'components/molecules/IconLink';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <IconLink iconName="arrowRight" iconSize={20} to="/">
        바로가기
      </IconLink>
      <div className="App"></div>
    </>
  );
}

export default App;
