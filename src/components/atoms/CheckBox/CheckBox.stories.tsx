import CheckBox from './index';
import { colors } from 'theme';

export default {
  component: CheckBox,
  title: 'atoms/CheckBox',
};

// 체크박스 기본값
export const checkbox_default = () => <CheckBox />;

// 체크박스 색 변경
export const checkbox_color = () => <CheckBox color={colors.gray} />;

// 체크박스 사이즈 변경
export const checkbox_size = () => <CheckBox size={10} />;

// 체크박스 그룹
export const listOfCheckBox = () => {
  return (
    <ul>
      <li>{checkbox_default()}</li>
      <li>{checkbox_color()}</li>
      <li>{checkbox_size()}</li>
    </ul>
  );
};
