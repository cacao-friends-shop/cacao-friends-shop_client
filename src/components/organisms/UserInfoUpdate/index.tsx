import React from 'react';
import { css } from '@emotion/react';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import { colors, fontSizes } from 'theme';

type UserInfoUpdate = {};

const UserInfoUpdate = () => {
  return (
    <section css={container}>
      <Title headingNumber={1}>정보수정</Title>
      <form action="/">
        <Input
          css={updateInputStyle}
          type="text"
          title="nickname"
          id="nickname"
          name="nickname"
          label="닉네임"
          value="이재훈"
        />
        <div css={buttonContainer}>
          <Button css={firstButtonStyle} bgColor="#ffffff">
            취소
          </Button>
          <Button bgColor="#3C404B" color="#fffff">
            저장
          </Button>
        </div>
      </form>
    </section>
  );
};

const container = css`
  width: 100%;
  height: 100%;
  padding: 0px 16px calc(100vh - 478px);

  margin: 0 auto;
  max-width: 64rem;
  h1 {
    font-size: ${fontSizes.xxxl_24};
    padding: 3.1rem 0 2.2rem;
  }
`;

const updateInputStyle = css`
  margin-top: 3.5rem;
  input[type='text'] + label {
    top: -4.5rem;
    font-size: ${fontSizes.sm_15};
    color: ${colors.black};
  }
  input[type='text'] {
    border: 1px solid rgb(227, 229, 232);
    border-radius: 0.4rem;
    padding-left: 2rem;
  }
`;
const buttonContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;

  button {
    border-radius: 0.4rem;
    width: 100%;
  }
  button + button {
    margin-left: 2rem;
  }
`;
const firstButtonStyle = css`
  border: 1px solid rgb(227, 229, 232);
`;
export default UserInfoUpdate;
