import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/organisms/Header';
import CommentInfo from 'components/molecules/CommentInfo';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <CommentInfo date="2021-05-04" likeCount={3} />
    </>
  );
}

export default App;
