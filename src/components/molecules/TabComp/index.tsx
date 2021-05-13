import React from 'react';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const TabComp = () => {
  return (
    <section css={tabStyle}>
      <div className="navContainer">
        <NavLink
          activeClassName={'selected'}
          className="navItem"
          to="/"
          activeStyle={activeTabStyle}
          exact
        >
          오늘
        </NavLink>
      </div>

      <div className="navContainer">
        <NavLink
          to="/new"
          activeClassName={'selected'}
          className="navItem update"
          activeStyle={activeTabStyle}
        >
          신규
        </NavLink>
      </div>

      <div className="navContainer">
        <NavLink className="navItem" to="/hot" activeStyle={activeTabStyle}>
          인기
        </NavLink>
      </div>

      <div className="navContainer">
        <NavLink className="navItem" to="/mypage" activeStyle={activeTabStyle}>
          마이
        </NavLink>
      </div>
    </section>
  );
};
const activeTabStyle = {
  borderBottom: '4px solid black',
  fontWeight: 700,
};
const tabStyle = css`
  /* position: fixed; */
  max-width: 64rem;
  position: relative;
  width: 100%;
  /* margin: 0 auto; */
  display: flex;
  margin: 20px auto 0;

  & .navContainer {
    flex-basis: 25%;
    width: 100%;
    text-align: center;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  & .navItem {
    width: 100%;
    display: inline-block;

    padding: 0 1.75rem 10px;
  }

  .update::after {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background: red;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 32%;
  }
  .update:focus::after {
    top: 10%;
  }
  .selected {
    border-bottom: 4px solid black;
    font-weight: 700;
  }
`;
export default TabComp;
