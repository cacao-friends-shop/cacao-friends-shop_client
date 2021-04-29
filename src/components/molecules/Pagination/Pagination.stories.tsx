import Pagination from './index';

export default {
  component: Pagination,
  title: 'molecules/Pagination',
};

// 게시물 32개 페이지네이션
export const pagination = () => <Pagination contentsLength={32} />;

// 게시물 50개 페이지네이션
export const pagination_02 = () => <Pagination contentsLength={50} />;
