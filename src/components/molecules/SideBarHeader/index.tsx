import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { colors } from 'theme';
import IconLink from '../IconLink';

const SideBarHeader = () => {
  return (
    <div css={style}>
      <Link to="/" css={style_login}>
        <span className="text-login">로그인</span>이 필요해요!
      </Link>
      <IconLink
        type="rightIcon"
        to="/"
        iconName="arrowRight"
        iconSize={15}
        bgColor="transparent"
        css={style_button}
      >
        비회원 주문조회
      </IconLink>
    </div>
  );
};

const style = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.gray};
  padding: 0 2.4rem 2.5rem;
`;

const style_login = css`
  font-weight: bold;
  font-size: 1.8rem;
  .text-login {
    text-decoration: underline;
  }
`;

const style_button = css`
  font-size: 1.4rem;
  span {
    margin-right: 0.3rem;
  }
`;

export default SideBarHeader;
