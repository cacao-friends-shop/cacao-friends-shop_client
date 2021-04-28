import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import ProductCard from 'components/molecules/ProductCard';
import ProductCardList from 'components/organisms/ProductCardList/ProductCardList';

const imageList = [
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_1_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_2_20210426185905.jpg',
];
function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ProductCardList />
    </>
  );
}

export default App;
