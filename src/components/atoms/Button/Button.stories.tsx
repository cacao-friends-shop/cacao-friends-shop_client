import Button from './index';
import { css } from '@emotion/react';
import { colors } from 'theme';

export default {
  component: Button,
  title: 'atoms/Button',
};

// 바로가기 버튼
export const buyNow = () => <Button css={styleBuyNow}>바로구매</Button>;

const styleBuyNow = css`
  color: ${colors.white};
  font-weight: bold;
  font-size: 1.8rem;
`;

// 로그인 버튼
export const login = () => (
  <Button css={styledLogin} bgColor={colors.yellow}>
    로그인
  </Button>
);

const styledLogin = css`
  width: 30%;
  font-size: 1.5rem;
  border-radius: 4px;
`;

// 버튼 그룹
export const listOfButtons = () => {
  return (
    <ul css={styleButtonList}>
      <li>{buyNow()}</li>
      <li>{login()}</li>
    </ul>
  );
};

const styleButtonList = css``;
