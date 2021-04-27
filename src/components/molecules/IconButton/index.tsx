import { css } from '@emotion/react';
import Icon from 'components/atoms/Icon';

type IconButtonProps = {
  /** 아이콘 이름 */
  name: string;
  /** 아이콘 크기 */
  size: number;
  /** 아이콘 배경색 */
  bgColor?: string;
  /** 아이콘 색깔 */
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${bgColor};
  color: ${fgColor};
  padding: 0;
  outline: none;

  &:focus-visible {
    outline: 1px solid blue;
  }
`;

export default IconButton;
