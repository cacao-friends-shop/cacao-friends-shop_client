import { useState } from 'react';
import Carousel from './';

export default {
  component: Carousel,
  title: 'container/Carousel',
};

const imageList = [
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_1_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_2_20210426185905.jpg',
];

export const DefaultCarousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    if (currentIdx <= 0) return;
    setCurrentIdx(currentIdx - 1);
  };

  const handleNext = () => {
    if (currentIdx >= imageList.length - 1) return;
    setCurrentIdx(currentIdx + 1);
  };
  return (
    <Carousel
      imgList={imageList}
      currentIdx={currentIdx}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />
  );
};
