import { css } from '@emotion/react';
import { colors } from 'theme';
import LinkIcon from './index';

export default {
  component: LinkIcon,
  title: 'molecules/LinkIcon',
};

// 로그인 아이콘 버튼 링크
export const login = () => (
  <LinkIcon
    type="leftIcon"
    to="/"
    iconName="lock"
    iconSize={20}
    bgColor="transparent"
    css={style_login}
  >
    로그인
  </LinkIcon>
);

const style_login = css`
  color: ${colors.gray};

  span {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;

// 비회원 주문조회 아이콘 버튼 링크
export const nonMemberOrder = () => (
  <LinkIcon
    type="rightIcon"
    to="/"
    iconName="arrowRight"
    iconSize={15}
    bgColor="transparent"
    css={style_nonMember}
  >
    비회원 주문조회
  </LinkIcon>
);

const style_nonMember = css`
  font-size: 1.4rem;
  span {
    margin-right: 0.3rem;
  }
`;

// 아이콘 버튼 링크 그룹
export const listOfLinkIcon = () => {
  return (
    <ul css={style_listOfLinkIcon}>
      <li>{login()}</li>
      <li>{nonMemberOrder()}</li>
    </ul>
  );
};

const style_listOfLinkIcon = css`
  display: flex;
  flex-flow: row wrap;

  li {
    flex-basis: 25%;
  }
`;
