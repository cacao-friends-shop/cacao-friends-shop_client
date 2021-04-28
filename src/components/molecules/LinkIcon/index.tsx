import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Icon from 'components/atoms/Icon';

type LinkIconProps = {
  /** 아이콘 방향 */
  type: string;
  /** 링크 to */
  to: string;
  /** 아이콘 이름 */
  iconName: string;
  /** 아이콘 사이즈 */
  iconSize: number;
  /** 버튼 배경색 */
  bgColor: string;
  /** 버튼 텍스트 */
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkIcon = ({
  type = 'leftIcon',
  to = '/',
  iconName = 'arrowRight',
  iconSize = 20,
  bgColor = 'transparent',
  children,
  ...restProps
}: LinkIconProps) => {
  const LeftIcon = (
    <>
      <Icon name={iconName} size={iconSize} />
      <span>{children}</span>
    </>
  );

  const RightIcon = (
    <>
      <span>{children}</span>
      <Icon name={iconName} size={iconSize} />
    </>
  );

  return (
    <Link to={to} css={style(bgColor)} {...restProps}>
      {type === 'rightIcon' ? RightIcon : LeftIcon}
    </Link>
  );
};

const style = (bgColor: string) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${bgColor};
`;

export default LinkIcon;
