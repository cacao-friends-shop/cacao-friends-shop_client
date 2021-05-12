import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import { Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Signup from 'pages/SignUp';
import Agreement from 'pages/Agreement';
import Home from 'pages/Home';
import NewProduct from 'pages/NewProduct';
import FavoriteProducts from 'pages/FavoriteProducts';
import Cart from 'pages/Cart';
import RecentlySee from 'pages/RecentlySee';
import Activity from 'pages/Activity';
import Order from 'pages/Order';
import Header from 'components/organisms/Header';
import PageNotFound from 'pages/PageNotFound';
import CharacterProducts from 'pages/CharacterProducts';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/new" component={NewProduct} />
        <Route path="/hot" component={FavoriteProducts} />
        <Route path={['/mypage/cart', '/mypage']} component={Cart} exact />
        <Route path="/mypage/act" component={Activity} />
        <Route path="/mypage/seen" component={RecentlySee} />
        <Route path="/mypage/orderlist" component={Order} />

        <Route path="/products/:character" component={CharacterProducts} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/agreement" component={Agreement} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
