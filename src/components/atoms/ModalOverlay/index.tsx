import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { colors } from 'theme';

const ModalOverlay = ({ ...restProps }) => {
  return <motion.div css={style} {...restProps}></motion.div>;
};

const style = css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.black};
  opacity: 0.7;
  z-index: 1000;
`;

export default ModalOverlay;
