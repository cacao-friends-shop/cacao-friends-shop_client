import Button from './index';
import { css } from '@emotion/react';
import { colors, fontSizes } from 'theme';
import Icon from 'components/atoms/Icon';

export default {
  component: Button,
  title: 'atoms/Button',
};

// 바로가기 버튼
export const buyNow = () => (
  <Button css={styleBuyNow}>
    바로구매
    <Icon name="basket" size={20} />
  </Button>
);

const styleBuyNow = css`
  position: relative;
  color: ${colors.white};
  font-weight: bold;
  font-size: ${fontSizes.lg_18};
  opacity: 0.9;

  svg {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(-50%, -50%);
  }
`;

// 로그인 버튼
export const login = () => (
  <Button css={styledLogin} bgColor={colors.yellow}>
    <Icon name="kakaoTalk" size={20} />
    로그인하기
  </Button>
);

const styledLogin = css`
  position: relative;
  width: 30%;
  font-size: ${fontSizes.sm_15};
  border-radius: 4px;

  svg {
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translate(-50%, -50%);
  }
`;

// 버튼 그룹
export const listOfButtons = () => {
  return (
    <ul>
      <li>{buyNow()}</li>
      <li>{login()}</li>
    </ul>
  );
};
