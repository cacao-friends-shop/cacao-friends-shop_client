import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { colors, fontSizes } from 'theme';

const MyTab = () => {
  return (
    <ul css={myTabStyle}>
      <li>
        <NavLink to="/seen" activeStyle={activeMyTabStyle}>
          최근 본
        </NavLink>
      </li>
      <li>
        <NavLink to="/act" activeStyle={activeMyTabStyle}>
          내 활동
        </NavLink>
      </li>
      <li>
        <NavLink to="/basket" activeStyle={activeMyTabStyle}>
          장바구니
        </NavLink>
      </li>
      <li>
        <NavLink to="/orderlist" activeStyle={activeMyTabStyle}>
          주문내역
        </NavLink>
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
`;

const activeMyTabStyle = {
  color: colors.black,
  fontWeight: 700,
};

export default MyTab;
