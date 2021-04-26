import { css } from "@emotion/react";

export interface InputProps {
  type: string;
  title: string;
  label: string;
  className: string;
}

const Input = ({ type, title, label, className, ...restProps }: InputProps) => {
  return (
    <div css={subtitleStyle} className={className}>
      <label htmlFor={title}>{label}</label>
      <input type={type} id={title} name={title} {...restProps} />
    </div>
  );
};

const subtitleStyle = css`
  box-sizing: border-box;
`;

export default Input;
