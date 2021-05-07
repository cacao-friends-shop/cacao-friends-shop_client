import { useState } from 'react';
import { css } from '@emotion/react';
import { colors, fontSizes } from 'theme';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const SortBox = () => {
  const [check, setCheck] = useState({
    sold: true,
    lower: false,
    expensive: false,
  });

  return (
    <ul css={sortBoxStyle(check)}>
      <li className="sold">
        <Link
          to="/"
          onClick={() =>
            setCheck({ sold: true, lower: false, expensive: false })
          }
        >
          판매량순
          {check.sold && <Icon name="outlineCheck" size={20} />}
        </Link>
      </li>
      <li className="lower">
        <Link
          to="/"
          onClick={() =>
            setCheck({ sold: false, lower: true, expensive: false })
          }
        >
          낮은 가격순
          {check.lower && <Icon name="outlineCheck" size={20} />}
        </Link>
      </li>

      <li className="expensive">
        <Link
          to="/"
          onClick={() =>
            setCheck({ sold: false, lower: false, expensive: true })
          }
        >
          높은 가격순
          {check.expensive && <Icon name="outlineCheck" size={20} />}
        </Link>
      </li>
    </ul>
  );
};

type checkState = {
  sold: boolean;
  lower: boolean;
  expensive: boolean;
};

const sortBoxStyle = (check: checkState) => css`
  z-index: 1002;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 64rem;
  margin: 0 auto;
  font-size: ${fontSizes.lg_18};
  background-color: ${colors.white};
  color: ${colors.gray};

  .sold {
    background-color: ${check.sold && colors.lightGray};
    color: ${check.sold && colors.black};
  }
  .lower {
    background-color: ${check.lower && colors.lightGray};
    color: ${check.lower && colors.black};
  }
  .expensive {
    background-color: ${check.expensive && colors.lightGray};
    color: ${check.expensive && colors.black};
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    padding: 2rem 1.5rem;
  }

  li:hover {
    background-color: ${colors.lightGray};
    color: ${colors.darkGray};
  }

  svg {
    position: absolute;
    right: 3%;
    fill: ${colors.pink};
  }
`;

export default SortBox;
