import Actionbar from '.';

export default {
  component: Actionbar,
  title: 'molecules/Actionbar',
};

// 기본 액션 바
export const HomeActionbar = () => <Actionbar currentIdx={3} imgLength={5} />;
