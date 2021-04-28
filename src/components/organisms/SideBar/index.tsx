import { css } from '@emotion/react';
import SideBarHeader from 'components/molecules/SideBarHeader';
import SideBarBody from 'components/molecules/SideBarBody';
import SideBarFooter from 'components/molecules/SideBarFooter';
import { colors } from 'theme';
import { motion } from 'framer-motion';

const SideBar = ({ ...restProps }) => {
  return (
    <motion.div css={style} {...restProps}>
      <SideBarHeader />
      <SideBarBody />
      <SideBarFooter />
    </motion.div>
  );
};

const style = css`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.white};
  width: 40rem;
  height: 100vh;
  padding: 3.5rem 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 40rem;
  }
`;

export default SideBar;
