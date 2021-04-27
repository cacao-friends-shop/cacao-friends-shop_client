import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors } from 'theme';
import Divider from 'components/atoms/Divider';
import NeedLogin from 'components/molecules/NeedLogin';
import LinkIconButton from 'components/molecules/LinkIconButton';

const SideBar = () => {
  return (
    <div css={style__container}>
      <div css={style__header}>
        <NeedLogin />
        <LinkIconButton
          type="rightIcon"
          iconName="arrowRight"
          iconSize={20}
          bgColor="transparent"
        >
          비회원 주문조회
        </LinkIconButton>
      </div>
      <Divider />
      <ul css={style__body}>
        <li>
          <Link to="/">장바구니 내역</Link>
        </li>
        <li>
          <Link to="/">주문·배송 내역</Link>
        </li>
        <li>
          <span tabIndex={0}>캐릭터</span>
          <ul>
            {/* TODO: 아바타 넣기 */}
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
          </ul>
        </li>
      </ul>
      <LinkIconButton
        type="leftIcon"
        iconName="lock"
        iconSize={20}
        bgColor="transparent"
        css={style__button}
      >
        로그인
      </LinkIconButton>
    </div>
  );
};

const style__container = css`
  /* background-color: green; */
  max-width: 40rem;
  padding: 0 2.4rem;
`;

const style__header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
`;

const style__button = css`
  button {
    color: ${colors.gray};
  }
  span {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;

const style__body = css`
  font-size: 1.5rem;
  padding: 2rem 0;
  li {
    padding: 1.5rem 0;
  }
`;

export default SideBar;
