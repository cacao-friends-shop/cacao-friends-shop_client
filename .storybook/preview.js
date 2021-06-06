import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import { ChakraProvider } from '@chakra-ui/react';

// redux
import { Provider } from 'react-redux';
import { rootSaga } from 'modules';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducers from 'modules';
import { configureStore } from '@reduxjs/toolkit';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);

export const decorators = [
  Story => {
    return (
      <>
        <Provider store={store}>
          <Router>
            <ChakraProvider>
              <Global styles={GlobalStyles} />
              <Story />
            </ChakraProvider>
          </Router>
        </Provider>
      </>
    );
  },
];
