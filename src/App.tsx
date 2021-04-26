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
      <IconButton name="search" />
      <Button bgcolor={colors.yellow}>바로가기</Button>
      <div className="App"></div>
      <div className="App">
        <Input type="text" title="fname" label="First Name" />
      </div>
    </>
  );
}

export default App;
