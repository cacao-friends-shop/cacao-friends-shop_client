import IconLink from './';

export default {
  component: IconLink,
  title: 'molecules/IconLink',
};

// 오른쪽 화살표 아이콘 링크
export const arrowRightIconLink = () => (
  <IconLink to="/" iconName="arrowRight" iconSize={20} />
);

// 홈 아이콘 링크
export const homeIconLink = () => (
  <IconLink to="/" iconName="home" iconSize={20} />
);

// 오픈 아이콘 링크
export const openIconLink = () => (
  <IconLink to="/" iconName="arrowDown" iconSize={20}>
    열기
  </IconLink>
);
