import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import { Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Signup from 'pages/SignUp';
import Agreement from 'pages/Agreement';
import NewProduct from 'pages/NewProduct';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <NewProduct />
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/agreement">
          <Agreement />
        </Route>
      </Switch>
    </>
  );
}

export default App;
