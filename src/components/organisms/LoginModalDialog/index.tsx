import React from 'react';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import { css } from '@emotion/react';
import IconButton from 'components/molecules/IconButton';
import { fontSizes } from 'theme';
import ModalOverlay from 'components/atoms/ModalOverlay';

type Props = {};

const LoginModalDialog = (props: Props) => {
  return (
    <section css={container}>
      <ModalOverlay bgColor="black" opacity={0.6} />
      <div css={modalContainer}>
        <img
          src={process.env.PUBLIC_URL + './assets/shy_login.png'}
          alt="부끄러워하는 라이언 이미지"
        />
        <h3>앗 로그인</h3>
        <p>
          앗 깜빡! 로그인하고 이용하기 <Icon name="fillHeart" size={20}></Icon>
        </p>
        <Button css={loginBtnStyle}>
          <Icon name="kakaoTalk" size={20}></Icon>로그인하기
        </Button>
        <IconButton css={closeBtnStyle} title="close" name="close" size={24} />
      </div>
    </section>
  );
};

const container = css`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const modalContainer = css`
  display: flex;
  flex-flow: column nowrap;
  padding: 4rem;
  max-width: 31rem;
  border-radius: 1.6rem;
  text-align: center;
  position: relative;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h3 {
    font-size: ${fontSizes.lg_18};
    margin-bottom: 0.6rem;
    color: #1e1e1e;
  }
  p {
    font-size: ${fontSizes.base_16};
    letter-spacing: -0.025rem;
    margin-bottom: 2.2rem;
    svg {
      transform: translateY(0.5rem);
      color: red;
    }
    path {
      fill: currentColor;
    }
  }
`;

const loginBtnStyle = css`
  width: 100%;
  min-height: 4.8rem;
  border-radius: 3.5rem;
  margin: 0px auto 4rem;
  background-color: rgb(255, 235, 0);
  position: relative;
  font-weight: bold;
  line-height: 1.33;
  font-size: ${fontSizes.sm_15};
  letter-spacing: -0.025rem;
  margin-left: 0.5rem;

  svg {
    transform: translate(-0.5rem, 0.5rem);
    /* position: relative;
    top: 0.5rem;
    left: -0.5rem; */
  }
`;

const closeBtnStyle = css`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;
export default LoginModalDialog;
