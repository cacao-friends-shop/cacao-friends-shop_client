import Header, { HeaderProps } from './index';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'components/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const HeaderBlock = Template.bind({});

HeaderBlock.args = {};
