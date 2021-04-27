import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import PostCard from 'components/organisms/PostCard';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <PostCard />
    </>
  );
}

export default App;
