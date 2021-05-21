import { useState } from 'react';
import { css } from '@emotion/react';
import Icon from '../Icon';
import { colors } from 'theme';

type CheckBoxProps = {
  /** 체크박스 색 */
  color: string;
  /** 체크박스 사이즈 */
  size: number;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const CheckBox = ({ color, size, ...restProps }: CheckBoxProps) => {
  const [isChecked, setisChecked] = useState(false);
  const handleClick = () => setisChecked(!isChecked);

  return (
    <label css={labelStyle(color)} {...restProps}>
      <input type="checkbox" onChange={handleClick} checked={isChecked} />

      {isChecked ? (
        <Icon name="checkboxChecked" size={size} />
      ) : (
        <Icon name="checkboxUnchecked" size={size} />
      )}
    </label>
  );
};

CheckBox.defaultProps = {
  color: colors.black,
  size: 20,
};

const labelStyle = (color: string) => css`
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  svg {
    fill: ${color};
  }
`;

export default CheckBox;
