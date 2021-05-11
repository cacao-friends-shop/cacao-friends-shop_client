import React from 'react';
import PostProfile from './index';

export default {
  title: 'pages/PostProfile',
  component: PostProfile,
};

export const postProfile = () => (
  <PostProfile
    title="네오"
    desc={
      <>
        카카오프렌즈 최고의 패셔니스타. <br /> 도도한 고양이 네오의 하루가
        궁금하니?
      </>
    }
    imgURL="assets/profile_neo.png"
  />
);
