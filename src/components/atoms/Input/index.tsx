import { css } from '@emotion/react';
import React from 'react';
import Icon from '../Icon';

export type InputProps = {
  /** Input 타입 */
  type: string;
  /** Input id */
  id: string;
  /** Input name */
  name: string;
  /** label title */
  title: string;
  /** Input 레이블 */
  label?: string;
  /** Input 클래스네임 */
  className?: string;
  /** change할때 일어나는 함수 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** blur할때 일어나는 함수 */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Input value */
  value?: string;
  /** ref */
  ref?: string;
  // checked
  checked?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      label,
      id,
      name,
      title,
      className,
      checked = false,
      value,
      onChange,
      ...restProps
    },
    ref
  ) => {
    return (
      <div css={subtitleStyle(checked)} className={className}>
        <input
          type={type}
          id={id}
          name={name}
          ref={ref}
          onChange={onChange}
          checked={checked}
          {...restProps}
        />

        {type === 'checkbox' ? (
          checked ? (
            <Icon name="fontAwesomeCheckCircle" size={18} />
          ) : (
            <Icon name="fontAwesomeregCheckCircle" size={18} />
          )
        ) : null}

        <label htmlFor={title}>
          {label}
          {type === 'checkbox' && <span></span>}
        </label>
      </div>
    );
  }
);

const subtitleStyle = (checked: boolean) => css`
  box-sizing: border-box;
  position: relative;

  input:not([type='checkbox']) {
    width: 100%;
    height: 48px;
    border-width: 0 0 2px 0;
    border-color: #ebebeb;
    font-size: 15px;
    padding: 11px 70px 8px 0;
    color: #252525;
    outline: 0;
    border-radius: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  input:not([type='checkbox']) + label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 47px;
    line-height: 47px;
    color: #ccc;
  }

  ${checked &&
  css`
    input + svg {
      color: #fee500;
    }
  `}
`;

export default Input;
