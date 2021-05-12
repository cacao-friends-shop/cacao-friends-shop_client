import Input from './index';

export default {
  title: 'atoms/Input',
  component: Input,
};

//Text Input
export const TextInput = () => <Input type="text" title="fname" />;

export const CheckBoxInput = () => <Input type="checkbox" title="fname" />;
