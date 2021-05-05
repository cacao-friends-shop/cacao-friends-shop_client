import PriceInfo from '.';

export default {
  component: PriceInfo,
  title: 'molecules/PriceInfo',
};

// 기본 타임스템프
export const DefaultPriceInfo = () => <PriceInfo totalPrice={39000} />;
