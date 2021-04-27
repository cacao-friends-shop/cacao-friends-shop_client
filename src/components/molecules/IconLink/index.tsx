import Icon from 'components/atoms/Icon';
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

type IconLinkProps = {
  /** 아이콘 이름 */
  iconName: string;
  /** 아이콘 크기 */
  iconSize: number;
  /** 경로 */
  to: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const IconLink = ({
  children,
  to = '/',
  iconName,
  iconSize,
  ...restProps
}: IconLinkProps) => {
  return (
    <div {...restProps}>
      <Link css={linkStyle} to={to}>
        <span>{children}</span>
        <Icon name={iconName} size={iconSize} />
      </Link>
    </div>
  );
};

const linkStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  span {
    padding-top: 0.2rem;
  }
`;

export default IconLink;
