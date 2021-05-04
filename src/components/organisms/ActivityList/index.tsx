import ActivityListItem from 'components/molecules/ActivityListItem';
import React from 'react';

const ActivityList = () => {
  return (
    <ul>
      <ActivityListItem
        title="시들지 않고 오래오래 옆에 있어 줄게"
        time="4분전"
      />
      <ActivityListItem
        title="시들지 않고 오래오래 옆에 있어 줄게"
        time="4분전"
      />
      <ActivityListItem
        title="시들지 않고 오래오래 옆에 있어 줄게"
        time="4분전"
      />
      <ActivityListItem
        title="시들지 않고 오래오래 옆에 있어 줄게"
        time="4분전"
      />
    </ul>
  );
};

export default ActivityList;
