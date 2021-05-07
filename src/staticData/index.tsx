import { v4 as uuid } from 'uuid';

// 사용처: organisms/SideBar
export const IconList = [
  {
    id: uuid(),
    link: '/',
    imagePath: 'assets/ryan_avatar.png',
    name: '라이언',
  },
  {
    id: uuid(),
    link: '/',
    imagePath: 'assets/apeach_avatar.png',
    name: '어피치',
  },
  {
    id: uuid(),
    link: '/',
    imagePath: 'assets/muzi_avatar.png',
    name: '무지',
  },
  {
    id: uuid(),
    link: '/',
    imagePath: 'assets/frodo_avator.png',
    name: '프로도',
  },
  {
    id: uuid(),
    link: '/',
    imagePath: 'assets/neo_avatar.png',
    name: '네오',
  },
];

// 사용처: pages/AdminList/templates
export const PostList = [
  {
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
];

//사용처 organisms/SearchBarChar/SearchBarChar
export const charList = [
  {
    id: uuid(),
    imagePath:
      'https://t1.daumcdn.net/friends/prod/category/Ryan_71_color_210303.png',
    alt: '라이언',
    url: '/',
  },
  {
    id: uuid(),
    imagePath:
      'https://t1.daumcdn.net/friends/prod/category/Apeach_71_color_210303.png',
    alt: '이파치',
    url: '/',
  },
  {
    id: uuid(),
    imagePath:
      'https://t1.daumcdn.net/friends/prod/category/Muzi_71_color_210303.png',
    alt: '무지',
    url: '/',
  },
  {
    id: uuid(),
    imagePath:
      'https://t1.daumcdn.net/friends/prod/category/Frodo_71_color_210303.png',
    alt: '프로도',
    url: '/',
  },
  {
    id: uuid(),
    imagePath:
      'https://t1.daumcdn.net/friends/prod/category/Neo_71_color_210303.png',
    alt: '네오',
    url: '/',
  },
];

// 사용처: pages/CharacterProducts/templates
export const options = [
  { id: uuid(), label: '판매량순', to: '/' },
  { id: uuid(), label: '낮은 가격순', to: '/' },
  { id: uuid(), label: '높은 가격순', to: '/' },
];
