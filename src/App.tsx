import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import { Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Signup from 'pages/SignUp';
import Agreement from 'pages/Agreement';
import NewProduct from 'pages/NewProduct';
import FavoriteProducts from './pages/FavoriteProducts/index';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <FavoriteProducts />
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
