import { css } from '@emotion/react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { colors } from 'theme';

type ModalOverlayProps = {
  /** 오버레이 배경색 */
  bgColor: string;
  /** 오버레이 투명도 */
  opacity: number;
} & HTMLMotionProps<'div'>;

const ModalOverlay = ({
  bgColor,
  opacity,
  ...restProps
}: ModalOverlayProps) => {
  return (
    <motion.div
      css={overlayStyle(bgColor, opacity)}
      {...restProps}
    ></motion.div>
  );
};

ModalOverlay.defaultProps = {
  bgColor: colors.black,
  opacity: 0.7,
};

const overlayStyle = (bgColor: string, opacity: number) => css`
  z-index: 1001;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${bgColor};
  opacity: ${opacity};
`;

export default ModalOverlay;
