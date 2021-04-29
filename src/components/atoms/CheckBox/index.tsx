import { useState } from 'react';
import { css } from '@emotion/react';
import Icon from '../Icon';
import { colors } from 'theme';

type CheckBoxProps = {
  color?: string;
  size?: number;
};

const CheckBox = ({ color = colors.black, size = 20 }: CheckBoxProps) => {
  const [isChecked, setchecked] = useState(false);

  const handleClick = () => setchecked(checked => !checked);

  return (
    <label htmlFor="checkbox" css={style(color)}>
      <input type="checkbox" id="checkbox" onClick={handleClick} />

      {isChecked ? (
        <Icon name="checkboxChecked" size={size} />
      ) : (
        <Icon name="checkboxUnchecked" size={size} />
      )}
    </label>
  );
};

const style = (color: string) => css`
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
