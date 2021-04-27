import Avatar from './';

export default {
  component: Avatar,
  title: 'components/Avatar',
};

export const ConAvatar = () => (
  <Avatar
    imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144557.png"
    alt="콘"
  />
);

export const RyanAvatar = () => (
  <Avatar
    imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144424.png"
    alt="라이언"
  />
);
