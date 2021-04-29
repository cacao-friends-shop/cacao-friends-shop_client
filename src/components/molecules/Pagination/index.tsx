import { Link } from '@chakra-ui/layout';
import { css } from '@emotion/react';

type PaginationProps = {
  contentsLength: number;
};

const Pagination = ({ contentsLength }: PaginationProps) => {
  const pageLength = Math.floor(contentsLength / 10) + 1;
  return (
    <ul css={style}>
      {Array.from({ length: pageLength }).map((_, i) => (
        <li key={i}>
          <Link to="/">{i}</Link>
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
      color: red;
      text-decoration: underline;
    }
  }
`;

export default Pagination;
