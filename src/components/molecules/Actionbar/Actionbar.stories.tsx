import Actionbar from '.';

export default {
  component: Actionbar,
  title: 'components/Actionbar',
};

export const DefaultActionbar = () => (
  <Actionbar currentIdx={3} imgLength={5} />
);
