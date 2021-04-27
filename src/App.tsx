import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import IconButton from 'components/molecules/IconButton';
import Button from 'components/atoms/Button';
import { colors } from 'theme';
import Input from 'components/atoms/Input';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Button bgColor={colors.yellow}>바로가기</Button>
      <Button bgColor={colors.yellow}>바로가기</Button>
      <div className="App"></div>

      <div className="App"></div>
    </>
  );
}

export default App;
