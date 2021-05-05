import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import ActivityListItem from 'components/molecules/ActivityListItem';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ActivityListItem
        title="시들지 않고 오래오래 옆에 있어 줄게"
        time="4분전"
      />
      <ActivityListItem
        title="시들지 않고 오래오래 옆에 있어 줄게"
        time="4분전"
      />
      <ActivityListItem
        title="시들지 않고 오래오래 옆에 있어 줄게"
        time="4분전"
      />
      {/* <Header TabComp={TabComp} /> */}
    </>
  );
}

export default App;
