import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors, fontSizes } from 'theme';

type LinkCountProps = {
  title: string;
  count: number;
  to: string;
  onClick?(): void;
} & React.RefAttributes<HTMLAnchorElement>;

const LinkCount = ({ title, count, to, ...restProps }: LinkCountProps) => {
  return (
    <Link to={to} css={linkStyle} {...restProps}>
      {title}
      {!!count && <span css={countStyle}>{count}</span>}
    </Link>
  );
};

LinkCount.defaultProps = {
  count: 0,
};

const linkStyle = css`
  display: block;
  padding: 2rem 0;
`;

const countStyle = css`
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.3rem;
  background-color: ${colors.pink};
  border-radius: 50%;
  color: ${colors.white};
  width: 2rem;
  height: 2rem;
  text-align: center;
  font-size: ${fontSizes.xxs_13};
`;

export default LinkCount;
