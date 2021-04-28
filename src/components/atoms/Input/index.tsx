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
};

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

  input {
    outline: none;
  }
`;

export default Input;
