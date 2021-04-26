import React from 'react';
import { css } from '@emotion/react';
import { colors } from 'theme';

export type ButtonProps = {
  children: React.ReactNode;
  borderRadius?: string;
  width?: string;
  bgcolor?: string;
  color?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  borderRadius = 'none',
  width = '100%',
  bgcolor = colors.pink,
  color = colors.black,
  ...restProps
}: ButtonProps) => {
  return (
    <button css={style(borderRadius, width, bgcolor, color)} {...restProps}>
      {children}
    </button>
  );
};

const style = (
  borderRadius: string,
  width: string,
  bgcolor: string,
  color: string
) => css`
  background-color: ${bgcolor};
  color: ${colors.white};
  border-radius: ${borderRadius};
  width: ${width};
  color: ${color};
  text-align: center;
  padding: 1.5rem 0rem;
`;

export default Button;
