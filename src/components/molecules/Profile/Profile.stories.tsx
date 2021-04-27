import Profile from './';

export default {
  component: Profile,
  title: 'components/Profile',
};

export const ConProfile = () => (
  <Profile
    imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144557.png"
    alt="콘"
    title="프렌즈 도감"
    desc="Daily Story"
    time="1분 전"
  />
);

export const RyanProfile = () => (
  <Profile
    imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144424.png"
    alt="라이언"
    title="라이언"
    time="6시간 전"
  />
);
