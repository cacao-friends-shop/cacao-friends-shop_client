import { useState } from 'react';
import Carousel from './';

export default {
  component: Carousel,
  title: 'organisms/Carousel',
};

const imageList = [
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_1_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_2_20210426185905.jpg',
];

// 기본 케러셀
export const DefaultCarousel = () => {
  const [[currentIdx, direction], setSlide] = useState([0, 0]);

  const slideMove = (newDirection: number) => {
    setSlide([currentIdx + newDirection, newDirection]);
  };

  const handlePrev = () => {
    if (currentIdx <= 0) return;
    slideMove(-1);
  };

  const handleNext = () => {
    if (currentIdx >= imageList.length - 1) return;
    slideMove(1);
  };
  return (
    <Carousel
      imgList={imageList}
      direction={direction}
      currentIdx={currentIdx}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />
  );
};
