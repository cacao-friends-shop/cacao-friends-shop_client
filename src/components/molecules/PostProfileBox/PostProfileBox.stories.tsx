import React from 'react';
import PostProfileBox from './index';
import { profileList } from 'staticData';

export default {
  component: PostProfileBox,
  title: 'molecules/PostProfileBox',
};

export const postProfileBoxList = () => (
  <>
    {profileList.map((profile, idx) => (
      <PostProfileBox
        key={idx}
        title={profile.title}
        desc={profile.desc}
        imgURL={profile.imgURL}
      />
    ))}
  </>
);
