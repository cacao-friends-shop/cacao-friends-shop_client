import Input, { InputProps } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Input",
  component: Input,
  //👇 Creates specific argTypes
  argTypes: {
  },
  args: {},
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;
export const TextInput = Template.bind({});

TextInput.args = {
  type: "text",
  title: "fname",
  label: "fname",
};
