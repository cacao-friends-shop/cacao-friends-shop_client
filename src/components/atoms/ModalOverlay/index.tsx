import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { colors } from 'theme';

type ModalOverlayProps = {
  /** 오버레이 배경색 */
  bgColor?: string;
  /** 오버레이 투명도 */
  opacity?: number;
};
// TODO: ...restProps 타입추가

const ModalOverlay = ({
  bgColor = colors.black,
  opacity = 0.7,
  ...restProps
}: ModalOverlayProps) => {
  return <motion.div css={style(bgColor, opacity)} {...restProps}></motion.div>;
};

const style = (bgColor: string, opacity: number) => css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${bgColor};
  opacity: ${opacity};
`;

export default ModalOverlay;
