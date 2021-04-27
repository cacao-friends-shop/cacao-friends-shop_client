import TabComp, { TabProps } from './index';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'components/TabComp',
  component: TabComp,
};

const Template: Story<TabProps> = args => <TabComp {...args} />;

export const TabBlock = Template.bind({});

TabBlock.args = {
  todayTab: <h1>today tab</h1>,
  newTab: <div>new tab</div>,
  popularTab: <h1>popular tab</h1>,
  myTab: <h1>my tab</h1>,
};
