import { useState } from 'react';

const useCarouselState = (imgList: string[]) => {
  const [[currentIdx, direction], setSlide] = useState([0, 0]);

  const slideMove = (newDirection: number) => {
    setSlide([currentIdx + newDirection, newDirection]);
  };

  const handlePrev = () => {
    if (currentIdx <= 0) return;
    slideMove(-1);
  };

  const handleNext = () => {
    if (currentIdx >= imgList.length - 1) return;
    slideMove(1);
  };

  return { currentIdx, direction, handlePrev, handleNext };
};

export default useCarouselState;
