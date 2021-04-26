import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import IconButton from 'components/molecules/IconButton';
import Button from 'components/atoms/Button';
import { colors } from 'theme';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <IconButton name="search" />
      <Button bgcolor={colors.yellow}>바로가기</Button>
      <div className="App"></div>
    </>
  );
}

export default App;
