import LinkCount from './index';

export default {
  title: 'atoms/LinkCount',
  component: LinkCount,
};

export const linkCount = () => <LinkCount title="장바구니" count={3} to="/" />;
