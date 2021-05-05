import { css } from '@emotion/react';
import Icon from 'components/atoms/Icon';
import React from 'react';

type CircleCheckboxProps = {
  children?: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const CircleCheckbox = ({ children, ...restProps }: CircleCheckboxProps) => {
  return (
    <label css={labelStyle} {...restProps}>
      <Icon name="checkCircle" size={23} />
      {children}
      <input css={checkboxStyle} type="checkbox" />
    </label>
  );
};

const labelStyle = css`
  position: absolute;
  top: 2rem;
  left: 1rem;
`;

const checkboxStyle = css`
  transform: translate3d(-27px, -2px, 0);
  width: 2rem;
  height: 2rem;
  opacity: 0;
  cursor: pointer;
`;

export default CircleCheckbox;
