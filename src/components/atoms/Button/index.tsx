import React from 'react';
import { css } from '@emotion/react';
import { colors } from 'theme/index';

export type ButtonProps = {
  /** 버튼 내용 */
  children: React.ReactNode;
  /** 버튼 border-radius */
  borderRadius?: string;
  /** 버튼 width */
  width?: string;
  /** 버튼 배경색 */
  bgColor?: string;
  /** 버튼 글자색 */
  color?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  borderRadius = 'none',
  width = '100%',
  bgColor = colors.pink,
  color = colors.black,
  ...restProps
}: ButtonProps) => {
  return (
    <button css={style(borderRadius, width, bgColor, color)} {...restProps}>
      {children}
    </button>
  );
};

const style = (
  borderRadius: string,
  width: string,
  bgColor: string,
  color: string
) => css`
  background-color: ${bgColor};
  color: ${colors.white};
  border-radius: ${borderRadius};
  width: ${width};
  color: ${color};
  text-align: center;
  padding: 1.5rem 0rem;
`;

export default Button;
