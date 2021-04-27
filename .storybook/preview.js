import React from 'react';
// import { BrowerRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/react';
import GlobalStyles from '../src/styles/GlobalStyles';

// export const decorators = [
//   Story => {
//     return (
//       <>
//         <Router>
//           <Global styles={GlobalStyles} />
//           <Story />
//         </Router>
//       </>
//     );
//   },
// ];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
