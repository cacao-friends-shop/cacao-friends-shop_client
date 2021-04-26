import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import IconButton from 'components/molecules/IconButton';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <IconButton name="search" size={40} />
      <IconButton name="trash" size={40} />
      <IconButton name="close" size={40} fgColor="red" />
      <IconButton name="fillHeart" size={40} fgColor="red" />
      <IconButton name="outlineHeart" size={40} />
      <IconButton name="bubble" size={40} />
      <IconButton name="home" size={40} />
      <IconButton name="basket" size={40} />
      <IconButton name="pencil" size={40} />
      <IconButton name="menu" size={40} />
      <IconButton name="arrowLeft" size={40} />
      <IconButton name="arrowRight" size={40} />
      <IconButton name="arrowUp" size={40} />
      <IconButton name="arrowDown" size={40} />
      <IconButton name="circleArrowUp" size={40} fgColor="gray" />
      <div className="App"></div>
    </>
  );
}

export default App;
