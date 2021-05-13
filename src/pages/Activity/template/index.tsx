import { css } from '@emotion/react';
import DeletebarBase from 'components/molecules/DeletebarBase';
import ActivityList from 'components/organisms/ActivityList';
import React from 'react';
import MyTab from 'components/molecules/MyTab';
import TabComp from 'components/molecules/TabComp';

const ActivityTemplate = () => {
  return (
    <>
      <TabComp />
      <MyTab />
      <div css={container}>
        <DeletebarBase deleteMsg="전체삭제">
          최근 50개까지 저장됩니다.
        </DeletebarBase>
        <ActivityList />
      </div>
    </>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
`;

export default ActivityTemplate;
