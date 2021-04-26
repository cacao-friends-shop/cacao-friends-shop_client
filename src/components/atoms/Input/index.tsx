import { css } from "@emotion/react";

export interface InputProps {
  type: string;
  title: string;
  label: string;
}

const Input = ({ type, title, label, ...restProps }: InputProps) => {
  console.log(type, title, label)
  return (
    <div css={subtitleStyle}>
      <label htmlFor={title}>{label}</label>
      <input type={type} id={title} name={title} {...restProps} />
    </div>
  );
};

const subtitleStyle = css`
  box-sizing: border-box;
`;

export default Input;
