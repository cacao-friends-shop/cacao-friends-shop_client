import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Title from 'components/atoms/Title';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Title headingNumber={2}>안녕하세요</Title>
      <Title headingNumber={1}>안녕하세요</Title>
      <div className="App"></div>
    </>
  );
}

export default App;
