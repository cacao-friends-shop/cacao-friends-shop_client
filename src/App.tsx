import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/organisms/Header';
import AdminList from 'pages/AdminList';
import Home from 'pages/Home';
import TabComp from 'components/molecules/TabComp';
import Footer from 'components/organisms/Footer';
import CharacterProducts from 'pages/CharacterProducts';
import SideBar from 'components/organisms/SideBar';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <CharacterProducts title="라이언" imgURL="assets/Category_Ryan.jpg" />
      <Footer />
    </>
  );
}

export default App;
