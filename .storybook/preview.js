import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import { Global } from '@emotion/react';



export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  Story => {
    return (
      <>
        <Router>
          <Global styles={GlobalStyles} />
          <Story />
        </Router>
      </>
    );
  },
];
