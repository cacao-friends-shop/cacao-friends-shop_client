import React from 'react';
import getPublicAsset from 'utils/getPublicAsset';
import { v4 as uuid } from 'uuid';

// 사용처: organisms/SideBar
export const IconList = [
  {
    id: uuid(),
    link: '/products/ryan',
    imagePath: getPublicAsset('assets/ryan_avatar.png'),
    name: '라이언',
  },
  {
    id: uuid(),
    link: '/products/apeach',
    imagePath: getPublicAsset('assets/apeach_avatar.png'),
    name: '어피치',
  },
  {
    id: uuid(),
    link: '/products/muzi',
    imagePath: getPublicAsset('assets/muzi_avatar.png'),
    name: '무지',
  },
  {
    id: uuid(),
    link: '/products/frodo',
    imagePath: getPublicAsset('assets/frodo_avator.png'),
    name: '프로도',
  },
  {
    id: uuid(),
    link: '/products/neo',
    imagePath: getPublicAsset('assets/neo_avatar.png'),
    name: '네오',
  },
];

// 사용처: pages/AdminList/templates
export const PostListItems = [
  {
    id: uuid(),
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    id: uuid(),
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    id: uuid(),
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    id: uuid(),
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    id: uuid(),
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    id: uuid(),
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    id: uuid(),
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    id: uuid(),
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    id: uuid(),
    title: '라이언 복근만들기 프로젝트',
    likeCount: 3,
    writer: 'jiwon',
    date: '2020-05-19 17:27',
    commentsCount: 3,
  },
  {
    id: uuid(),
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
    alt: '어피치',
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

// 사용처: molecules/PostProfileBox
export const profileList = [
  {
    title: '라이언',
    imgURL: 'assets/profile_ryan.png',
    desc: (
      <>
        머나먼 둥둥섬을 떠나 자유를 찾아온 왕자.
        <br /> 나는 갈기 없는 숫사자 컴플렉스야 (쉿)
      </>
    ),
  },
  {
    title: '어피치',
    imgURL: 'assets/profile_apeach.png',
    desc: (
      <>
        카카오프렌즈 최고 잔망꾸러기 복숭아🍑
        <br /> 피치 못할 매력에 빠져봐!
      </>
    ),
  },
  {
    title: '프로도',
    imgURL: 'assets/profile_frodo.png',
    desc: (
      <>
        네오의 영원한 단짝.
        <br /> 부잣집 도시개 프로도를 알고싶다면?
      </>
    ),
  },
  {
    title: '무지',
    imgURL: 'assets/profile_muzi.png',
    desc: (
      <>
        무지무지 귀여운 토끼옷을 입은 <br /> 단무지의 하루를 보여줄게 🐰
      </>
    ),
  },
  {
    title: '네오',
    imgURL: 'assets/profile_neo.png',
    desc: (
      <>
        카카오프렌즈 최고의 패셔니스타. <br /> 도도한 고양이 네오의 하루가
        궁금하니?
      </>
    ),
  },
];

export type CharacterNameLists = {
  ryan: string;
  apeach: string;
  muzi: string;
  frodo: string;
  neo: string;
};

export const characterNameList: CharacterNameLists = {
  ryan: '라이언',
  apeach: '어피치',
  muzi: '무지',
  frodo: '프로도',
  neo: '네오',
};

export const imgList = [
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
  'https://t1.daumcdn.net/friends/prod/product/20210426153732966_8809721508459_ZW_00.jpg?type=thumb&opt=R352x352@2xa',
];
