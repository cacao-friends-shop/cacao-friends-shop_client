import List from './index';

export default {
  component: List,
  title: 'molecules/List',
};

export const list = () => (
  <List
    title="라이언 복근만들기 프로젝트"
    likeCount={3}
    writer="jiwon"
    date="2020-05-19 17:27"
    commentsCount={360}
  />
);
