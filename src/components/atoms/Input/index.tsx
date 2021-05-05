import { css } from '@emotion/react';
import React from 'react';

export type InputProps = {
  /** Input 타입 */
  type: string;
  /** Input id, name */
  title: string;
  /** Input 레이블 */
  label?: string;
  /** Input 클래스네임 */
  className?: string;
  /** change할때 일어나는 함수 */
  onChange?: any;
  /** blur할때 일어나는 함수 */
  onBlur?: any;
  /** Input value */
  value?: any;
  /** ref */
  ref?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef(
  ({ type, title, label, className, ...restProps }: InputProps, ref: any) => {
    return (
      <div css={subtitleStyle} className={className}>
        <input type={type} id={title} name={title} ref={ref} {...restProps} />
        <label htmlFor={title}>
          {label}
          {type === 'checkbox' && <span></span>}
        </label>
      </div>
    );
  }
);

const subtitleStyle = css`
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
`;

export default Input;
