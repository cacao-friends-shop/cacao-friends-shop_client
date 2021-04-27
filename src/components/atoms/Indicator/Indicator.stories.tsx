import Indicator from '.';

export default {
  component: Indicator,
  title: 'components/Indicator',
};

export const DefaultIndicator = () => (
  <Indicator imgLength={6} currentIdx={3} />
);
