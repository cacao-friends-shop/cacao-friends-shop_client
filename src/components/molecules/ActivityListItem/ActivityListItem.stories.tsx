import ActivityListItem from '.';

export default {
  component: ActivityListItem,
  title: 'molecules/ActivityListItem',
};

// 기본 타임스템프
export const DefaultActivityListItem = () => (
  <ActivityListItem title="시들지 않고 오래오래 옆에 있어 줄게" time="4분전" />
);
