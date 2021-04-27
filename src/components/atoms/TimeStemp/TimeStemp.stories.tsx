import TimeStemp from '.';

export default {
  component: TimeStemp,
  title: 'atoms/TimeStemp',
};

// 기본 타임스템프
export const DefaultTimeStemp = () => <TimeStemp time="1분 전" />;
