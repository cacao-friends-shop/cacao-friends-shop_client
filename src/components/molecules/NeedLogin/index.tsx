import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const NeedLogin = () => {
  return (
    <Link to="#" css={style}>
      <span className="text-login">로그인</span>이 필요해요!
    </Link>
  );
};

const style = css`
  font-weight: bold;
  font-size: 1.8rem;
  .text-login {
    text-decoration: underline;
  }
`;

export default NeedLogin;
