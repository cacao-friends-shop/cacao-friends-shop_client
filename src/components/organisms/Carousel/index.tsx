import { css } from '@emotion/react';
import IconButton from 'components/molecules/IconButton';
import { AnimatePresence, motion } from 'framer-motion';

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
  return (
    <div css={container}>
      <AnimatePresence exitBeforeEnter>
        <motion.img
          key={imgList[currentIdx]}
          src={imgList[currentIdx]}
          initial={{ x: 300, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: 'tween', duration: 0.2 },
          }}
          exit={{
            x: -300,
            opacity: 0,
            transition: { type: 'tween', duration: 0.2 },
          }}
          alt="Img"
        />
      </AnimatePresence>
      {currentIdx !== 0 && (
        <IconButton
          className="prevBtn"
          css={buttonStyle}
          name="arrowLeft"
          size={30}
          onClick={handlePrev}
        />
      )}
      {currentIdx !== imgList.length - 1 && (
        <IconButton
          className="nextBtn"
          css={buttonStyle}
          name="arrowRight"
          size={30}
          onClick={handleNext}
        />
      )}
    </div>
  );
};

const container = css`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }

  .nextBtn {
    right: 0;
  }
`;

const buttonStyle = css`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
`;

export default Carousel;
