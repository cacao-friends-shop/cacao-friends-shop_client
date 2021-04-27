import Indicator from '.';

export default {
  component: Indicator,
  title: 'atoms/Indicator',
};

// 기본 인디케이터
export const DefaultIndicator = () => (
  <Indicator imgLength={6} currentIdx={3} />
);
