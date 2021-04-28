import { css } from '@emotion/react';
import { colors } from 'theme';

type ModalOverlayProps = {
  isShow?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

const ModalOverlay = ({ isShow = true, onClick }: ModalOverlayProps) => {
  return <div css={style(isShow)} onClick={onClick}></div>;
};

const style = (isShow: boolean) => css`
  display: ${isShow ? 'block' : 'none'};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.black};
  opacity: 0.7;
`;

export default ModalOverlay;
