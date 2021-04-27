import React from 'react';

import Avatar from './';

export default {
  component: Avatar,
  title: 'atoms/Avatar',
};

// 콘 아바타
export const ConAvatar = () => (
  <Avatar
    imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144557.png"
    alt="콘"
  />
);

// 라이언 아바타
export const RyanAvatar = () => (
  <Avatar
    imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144424.png"
    alt="라이언"
  />
);

// 어피치 아바타
export const ApeachAvatar = () => (
  <Avatar
    imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144431.png"
    alt="어피치"
  />
);

// 무지 아바타
export const MujiAvatar = () => (
  <Avatar
    imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144437.png"
    alt="무지"
  />
);

const avatarList = [
  {
    imagePath:
      'https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144557.png',
    alt: '콘',
  },
  {
    imagePath:
      'https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144424.png',
    alt: '라이언',
  },
  {
    imagePath:
      'https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144431.png',
    alt: '어피치',
  },
  {
    imagePath:
      'https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144437.png',
    alt: '무지',
  },
];

// 아바타 리스트
export const AvatarList = () => {
  return (
    <ul>
      {avatarList.map(avatar => (
        <li css={{ marginBottom: '10px' }}>
          <Avatar
            css={{ marginBottom: '10px' }}
            imagePath={avatar.imagePath}
            alt={avatar.alt}
          />
          <span>이름: {avatar.alt}</span>
          <p>이미지 경로: {avatar.imagePath}</p>
        </li>
      ))}
    </ul>
  );
};
