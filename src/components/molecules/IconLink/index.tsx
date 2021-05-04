import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import Icon from 'components/atoms/Icon';

type IconLinkProps = {
  /** 아이콘 이름 */
  iconName: string;
  /** 아이콘 크기 */
  iconSize: number;
  /** 경로 */
  to: string;
  /** 아이콘 방향 */
  type?: string;
  /** 링크 배경색 */
  bgColor?: string;
  children?: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const IconLink = ({
  children,
  to = '/',
  iconName,
  iconSize,
  type = 'leftIcon',
  bgColor = 'transparent',
  ...restProps
}: IconLinkProps) => {
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
    <Link css={linkStyle(bgColor)} to={to} {...restProps}>
      {type === 'rightIcon' ? RightIcon : LeftIcon}
    </Link>
  );
};

const linkStyle = (bgColor: string) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${bgColor};
`;

export default IconLink;
