import SortBoxLink from './index';

export default {
  component: SortBoxLink,
  title: 'atoms/SortBoxLink',
};

export const sortBoxLinkList = () => (
  <ul>
    <SortBoxLink title="판매량순" to="/" selected={true} />
    <SortBoxLink title="낮은 가격순" to="/" selected={false} />
    <SortBoxLink title="높은 가격순" to="/" selected={false} />
  </ul>
);
