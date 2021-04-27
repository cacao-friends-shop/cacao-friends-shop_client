import { css } from '@emotion/react';
import { colors } from 'theme';
import LinkIconButton from './index';

export default {
  component: LinkIconButton,
  title: 'molecules/LinkButton',
};

// 로그인 아이콘 버튼 링크
export const login = () => (
  <LinkIconButton
    type="leftIcon"
    iconName="lock"
    iconSize={20}
    bgColor="transparent"
    css={style__button}
  >
    로그인
  </LinkIconButton>
);

const style__button = css`
  button {
    color: ${colors.gray};
  }
  span {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;

// 비회원 주문조회 아이콘 버튼 링크
export const nonMemberOrder = () => (
  <LinkIconButton
    type="rightIcon"
    iconName="arrowRight"
    iconSize={20}
    bgColor="transparent"
  >
    비회원 주문조회
  </LinkIconButton>
);

// 아이콘 버튼 링크 그룹
export const listOfLinkIconButton = () => {
  return (
    <ul>
      <li>{login()}</li>
      <li>{nonMemberOrder()}</li>
    </ul>
  );
};
