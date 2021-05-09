import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducers from 'thunks';
import thunk from 'redux-thunk';
const middlewares = [thunk];

const store = createStore(appReducers, applyMiddleware(...middlewares));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
