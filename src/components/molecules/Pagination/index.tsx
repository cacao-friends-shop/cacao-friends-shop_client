import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { colors } from 'theme';
import IconLink from 'components/molecules/IconLink';

type PaginationProps = {
  /** 게시물의 총개수 */
  contentsLength: number;
} & React.HTMLAttributes<HTMLUListElement>;

const Pagination = ({ contentsLength, ...restProps }: PaginationProps) => {
  const pagesLength = Math.ceil(contentsLength / 10);

  return (
    <div css={container}>
      <IconLink
        iconName="arrowDropleft"
        iconSize={20}
        to="/"
        css={linkStyle('left')}
      />
      <ul css={paginationStyle} {...restProps}>
        {Array.from({ length: pagesLength }).map((_, i) => (
          <li key={i}>
            <Link to="/">{i + 1}</Link>
          </li>
        ))}
      </ul>
      <IconLink
        iconName="arrowDropright"
        iconSize={20}
        to="/"
        css={linkStyle('right')}
      />
    </div>
  );
};

const container = css`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const linkStyle = (type: string) => css`
  margin-right: ${type === 'left' && '1rem'};
  margin-left: ${type === 'right' && '1rem'};
`;

const paginationStyle = css`
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;

  li {
    padding: 0 0.5rem;
  }

  a {
    cursor: pointer;
    &:hover {
      color: ${colors.red};
      text-decoration: underline;
    }
  }
`;

export default Pagination;
