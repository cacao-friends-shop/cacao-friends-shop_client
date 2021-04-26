import Icon from 'components/atoms/Icon';
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

type IconLinkProps = {
  iconName: string;
  iconSize: number;
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
        {children}
        <Icon name={iconName} size={iconSize} />
      </Link>
    </div>
  );
};

const linkStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    vertical-align: middle;
  }
`;

export default IconLink;
