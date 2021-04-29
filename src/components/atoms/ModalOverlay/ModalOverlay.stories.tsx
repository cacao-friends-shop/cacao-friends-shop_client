import { colors } from 'theme';
import ModalOverlay from './index';

export default {
  component: ModalOverlay,
  title: 'atoms/ModalOverlay',
};

// 오버레이 기본값
export const modalOverlay_default = () => <ModalOverlay />;

// 오버레이 색 변경
export const modalOverlay_color = () => <ModalOverlay bgColor={colors.pink} />;

// 오버레이 투명도
export const modalOverlay_opacity = () => <ModalOverlay opacity={0.3} />;
