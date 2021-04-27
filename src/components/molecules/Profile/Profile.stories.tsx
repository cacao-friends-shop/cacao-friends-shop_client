import Profile from './';

export default {
  component: Profile,
  title: 'molecules/Profile',
};

// 콘 프로필
export const ConProfile = () => (
  <Profile
    imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144557.png"
    alt="콘"
    title="프렌즈 도감"
    desc="Daily Story"
    time="1분 전"
  />
);

// 라이언 프로필
export const RyanProfile = () => (
  <Profile
    imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144424.png"
    alt="라이언"
    title="라이언"
    time="6시간 전"
  />
);

const profileList = [
  {
    imagePath:
      'https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144557.png',
    alt: '콘',
    title: '프렌즈 도감',
    desc: 'Daily Story',
    time: '1분 전',
  },
  {
    imagePath:
      'https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144424.png',
    alt: '라이언',
    title: '라이언',
    time: '6시간 전',
  },
  {
    imagePath:
      'https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144431.png',
    alt: '어피치',
    title: '어피치',
    desc: 'Story',
    time: '1시간 전',
  },
  {
    imagePath:
      'https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144437.png',
    alt: '무지',
    title: '무지',
    time: '14시간 전',
  },
];

// 프로필 그룹
export const ProfileList = () => {
  return (
    <ul>
      {profileList.map(profile => (
        <li key={profile.alt} css={{ marginBottom: '10px' }}>
          <Profile
            imagePath={profile.imagePath}
            alt={profile.alt}
            title={profile.title}
            time={profile.time}
            desc={profile?.desc}
          />
        </li>
      ))}
    </ul>
  );
};
