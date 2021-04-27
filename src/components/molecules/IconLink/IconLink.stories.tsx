import IconLink from './';

export default {
  component: IconLink,
  title: 'components/IconLink',
};

export const arrowRightIconLink = () => (
  <IconLink to="/" iconName="arrowRight" iconSize={20} />
);

export const homeIconLink = () => (
  <IconLink to="/" iconName="home" iconSize={20} />
);

export const openIconLink = () => (
  <IconLink to="/" iconName="arrowDown" iconSize={20}>
    열기
  </IconLink>
);
