import TimeStemp from '.';

export default {
  component: TimeStemp,
  title: 'components/TimeStemp',
};

export const DefaultTimeStemp = () => <TimeStemp time="1분 전" />;
