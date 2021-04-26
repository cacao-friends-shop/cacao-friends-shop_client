import { css } from '@emotion/react';
import Icon from 'components/atoms/Icon';

type IconButtonProps = {
  name: string;
  size: number;
  bgColor?: string;
  fgColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({
  name,
  size,
  bgColor = 'none',
  fgColor = 'inherit',
  ...restProps
}: IconButtonProps) => {
  return (
    <button css={buttonStyle(fgColor, bgColor)} {...restProps}>
      <Icon name={name} size={size} />
    </button>
  );
};

const buttonStyle = (fgColor: string, bgColor: string) => css`
  background: ${bgColor};
  color: ${fgColor};
  padding: 0;
  outline: none;
`;

export default IconButton;
