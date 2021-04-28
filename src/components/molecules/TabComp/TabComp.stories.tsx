import TabComp from './index';

export default {
  title: 'molecules/TabComp',
  component: TabComp,
};

/**
 *
 * params
 * todayTab: React.ReactNode
 * newTab: React.ReactNode
 * popularTab: React.ReactNode
 * myTab: React.ReactNode
 */
export const TabBlock = () => (
  <TabComp
    todayTab={<div>today</div>}
    newTab={<div>new</div>}
    popularTab={<div>popular</div>}
    myTab={<div>my</div>}
  ></TabComp>
);
