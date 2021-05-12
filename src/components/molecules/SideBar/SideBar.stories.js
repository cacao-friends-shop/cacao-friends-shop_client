import SideBar from './index';

export default {
  component: SideBar,
  title: 'organisms/SideBar',
};

export const sideBar = () => (
  <SideBar>
    <SideBar.Header type="nonLogin" />
    <SideBar.Body />
    <SideBar.Footer type="nonLogin" />
  </SideBar>
);
