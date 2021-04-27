import { css } from '@emotion/react';
import IconButton from 'components/molecules/IconButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type CarouselProps = {
  /** 이미지 리스트 */
  imgList: string[];
  /** 현재 보이는 이미지의 인덱스 */
  currentIdx: number;
  /** 이전 이미지 이동 함수 */
  handlePrev: () => void;
  /** 다음 이미지 이동 함수 */
  handleNext: () => void;
};

const Carousel = ({
  imgList,
  currentIdx,
  handleNext,
  handlePrev,
}: CarouselProps) => {
  const [isAnimationEnd, setIsAnimationEnd] = useState(true);

  const handleSetIsAnimationEnd = () => {
    setIsAnimationEnd(true);
  };

  return (
    <div css={container}>
      <div css={imgContainer}>
        <AnimatePresence initial={false}>
          <motion.img
            key={imgList[currentIdx]}
            src={imgList[currentIdx]}
            onAnimationComplete={handleSetIsAnimationEnd}
            initial={{ x: 600 }}
            animate={{
              x: 0,
              transition: {
                type: 'tween',
                duration: 0.3,
              },
            }}
            exit={{
              x: -600,
              transition: { type: 'tween', duration: 0.4 },
            }}
            alt="Img"
          />
        </AnimatePresence>
      </div>
      {currentIdx !== 0 && (
        <IconButton
          className="prevBtn"
          css={buttonStyle}
          name="arrowLeft"
          size={30}
          onClick={() => {
            if (isAnimationEnd) handlePrev();
            setIsAnimationEnd(false);
          }}
        />
      )}
      {currentIdx !== imgList.length - 1 && (
        <IconButton
          className="nextBtn"
          css={buttonStyle}
          name="arrowRight"
          size={30}
          onClick={() => {
            if (isAnimationEnd) handleNext();
            setIsAnimationEnd(false);
          }}
        />
      )}
    </div>
  );
};

const container = css`
  width: 100%;
  position: relative;

  button {
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
  .prevBtn {
    left: 1rem;
  }
  .nextBtn {
    right: 1rem;
  }
`;

const imgContainer = css`
  position: relative;
  background-color: black;
  height: 500px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    max-height: 100%;
  }
`;

const buttonStyle = css`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
`;

export default Carousel;
