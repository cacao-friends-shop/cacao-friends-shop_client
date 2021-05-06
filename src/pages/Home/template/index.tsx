import React from 'react';
import PostCard from 'components/organisms/PostCard';

const imageList = [
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_1_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_2_20210426185905.jpg',
];

const Template = () => {
  return (
    <>
      <PostCard imgList={imageList} />
      <PostCard imgList={imageList} />
      <PostCard imgList={imageList} />
      <PostCard imgList={imageList} />
    </>
  );
};

export default Template;
