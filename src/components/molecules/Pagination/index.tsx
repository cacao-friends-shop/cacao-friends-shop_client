import { Link } from '@chakra-ui/layout';
import { css } from '@emotion/react';
import { colors } from 'theme';

type PaginationProps = {
  /** 게시물의 총개수 */
  contentsLength: number;
} & React.HTMLAttributes<HTMLUListElement>;

const Pagination = ({ contentsLength, ...restProps }: PaginationProps) => {
  const pagesLength = Math.ceil(contentsLength / 10);

  return (
    <ul css={style} {...restProps}>
      {Array.from({ length: pagesLength }).map((_, i) => (
        <li key={i}>
          <Link to="/">{i + 1}</Link>
        </li>
      ))}
    </ul>
  );
};

const style = css`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
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
