import { useState } from 'react';
import { css } from '@emotion/react';
import { colors, fontSizes } from 'theme';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const SortBox = () => {
  const [check, setCheck] = useState(false);
  const handleClick = () => setCheck(true);

  return (
    <ul css={sortBoxStyle(check)}>
      <li>
        <Link to="/" onClick={handleClick}>
          판매량순
          {check && <Icon name="outlineCheck" size={20} />}
        </Link>
      </li>
      <li>
        <Link to="/" onClick={handleClick}>
          낮은 가격순
          {check && <Icon name="outlineCheck" size={20} />}
        </Link>
      </li>

      <li>
        <Link to="/" onClick={handleClick}>
          높은 가격순
          {check && <Icon name="outlineCheck" size={20} />}
        </Link>
      </li>
    </ul>
  );
};

const sortBoxStyle = (check: boolean) => css`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 64rem;
  margin: 0 auto;
  font-size: ${fontSizes.lg_18};
  background-color: ${colors.white};
  color: ${colors.gray};

  a {
    display: block;
    padding: 2rem 1.5rem;
  }

  li {
    background-color: ${check && colors.lightGray};
  }

  li:hover {
    background-color: ${colors.lightGray};
    color: ${colors.darkGray};
  }
`;

export default SortBox;
