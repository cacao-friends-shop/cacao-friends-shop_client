import Input from './index';
import { css } from '@emotion/css';

const styles = css`
  // background: black;
`;

export default {
  title: 'atoms/Input',
  component: Input,
};

//Text Input
export const TextInput = () => <Input type="text" title="fname" />;

export const CheckBoxInput = () => <Input type="checkbox" title="fname" />;
