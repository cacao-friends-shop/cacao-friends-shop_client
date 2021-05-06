import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { colors, fontSizes } from 'theme';

const MyTab = () => {
  return (
    <ul css={myTabStyle}>
      <li>
        <NavLink to="/seen">최근 본</NavLink>
      </li>
      <li>
        <NavLink to="/act">내 활동</NavLink>
      </li>
      <li>
        <NavLink to="/basket">장바구니</NavLink>
      </li>
      <li>
        <NavLink to="/orderlist">주문내역</NavLink>
      </li>
    </ul>
  );
};

const myTabStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 64rem;
  margin: 0 auto;
  background-color: ${colors.lightGray};
  color: ${colors.gray};
  border-top: 1px solid ${colors.gray};
  font-size: ${fontSizes.xs_14};

  a {
    display: block;
    text-align: center;
    padding: 1.3rem 4.5rem;
  }

  .active {
    color: ${colors.black};
    font-weight: bold;
  }
`;

export default MyTab;
