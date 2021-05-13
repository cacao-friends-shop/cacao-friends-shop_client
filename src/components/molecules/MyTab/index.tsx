import { css } from '@emotion/react';
import { NavLink, useHistory } from 'react-router-dom';
import { colors, fontSizes } from 'theme';

const MyTab = () => {
  let mypage = false;
  const { location } = useHistory();
  if (location.pathname === '/mypage') mypage = true;

  return (
    <ul css={myTabStyle}>
      <li>
        <NavLink to="/mypage/seen">최근 본</NavLink>
      </li>
      <li>
        <NavLink to="/mypage/act">내 활동</NavLink>
      </li>
      <li>
        <NavLink to="/mypage/cart" css={linkStyle(mypage)}>
          장바구니
        </NavLink>
      </li>
      <li>
        <NavLink to="/mypage/orderlist">주문내역</NavLink>
      </li>
    </ul>
  );
};

const myTabStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 64rem;
  background-color: ${colors.lightGray};
  color: ${colors.gray};
  border-top: 1px solid ${colors.gray};
  font-size: ${fontSizes.xs_14};
  margin: 0 auto;

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

const linkStyle = (mypage: boolean) => css`
  color: ${mypage && colors.black};
  font-weight: ${mypage && 'bold'};
`;

export default MyTab;
