import Input, { InputProps } from './index';
import { Story, Meta } from '@storybook/react';
import { css } from '@emotion/css';

const styles = css`
  // background: black;
`;

export default {
  title: 'components/Input',
  component: Input,
};

const Template: Story<InputProps> = args => <Input {...args} />;

export const TextInput = Template.bind({});

TextInput.args = {
  type: 'text',
  title: 'fname',
  label: 'fname',
  className: styles,
};
