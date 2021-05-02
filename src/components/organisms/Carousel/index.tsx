import { css } from '@emotion/react';
import IconButton from 'components/molecules/IconButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type CarouselProps = {
  /** 이미지 리스트 */
  imgList: string[];
  /** 현재 보이는 이미지의 인덱스 */
  currentIdx: number;
  /** 캐러셀이 이동하는 방향조정 */
  direction: number;
  /** 이전 이미지 이동 함수 */
  handlePrev: () => void;
  /** 다음 이미지 이동 함수 */
  handleNext: () => void;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 600 : -600,
    };
  },
  center: {
    x: 0,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 550 : -550,
    };
  },
};

const Carousel = ({
  imgList,
  currentIdx,
  direction,
  handleNext,
  handlePrev,
  children,
  ...restProps
}: CarouselProps) => {
  const [isAnimationEnd, setIsAnimationEnd] = useState(true);

  const handleSetIsAnimationEnd = () => {
    setIsAnimationEnd(true);
  };

  return (
    <div css={container}>
      <div css={imgContainer} {...restProps}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIdx}
            src={imgList[currentIdx]}
            custom={direction}
            onAnimationComplete={handleSetIsAnimationEnd}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', duration: 0.4 },
            }}
            alt="Img"
          />
        </AnimatePresence>
        {children}
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
