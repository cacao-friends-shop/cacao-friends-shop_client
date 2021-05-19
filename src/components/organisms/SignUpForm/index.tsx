import React from 'react';
import { Formik } from 'formik';
import { css } from '@emotion/react';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

const SignUpForm = () => {
  return (
    <section css={container}>
      <h1>KaKao</h1>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        onSubmit={() => {}}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <>
            <form css={formStyle} noValidate onSubmit={handleSubmit}>
              <h2>카카오계정 정보를 입력해 주세요.</h2>
              <div css={emailInputStyle}>
                <h3>카카오계정 이메일</h3>
                <Input
                  type="email"
                  title="email"
                  // noValidate="novalidate"
                  label="아이디 입력"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ul>
                  <li>
                    입력한 카카오메일로 카카오계정에 로그인할 수 있습니다.
                  </li>
                  <li>
                    한번 만든 카카오메일은 변경할 수 없으니, 오타가 없도록
                    신중히 확인해 주세요.
                  </li>
                  <li>
                    생성한 카카오메일로 카카오계정과 관련한 알림을 받아볼 수
                    있습니다.
                  </li>
                </ul>
              </div>
              <div>
                <h3>비밀번호</h3>
                <Input
                  type="password"
                  title="password"
                  label="비밀번호 (8~32자리)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Input
                  type="password"
                  title="confirmPassword"
                  label="비밀번호 재입력"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <div css={nicknameInputStyle}>
                <h3>닉네임</h3>
                <Input
                  type="text"
                  title="nickname"
                  label="닉네임을 입력해주세요"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span className="nickname-limit">0/20</span>
              </div>
              <div>
                <h3>전화번호</h3>
                <Input
                  type="tel"
                  title="phoneNumber"
                  label="전화번호"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              {/* <Button className="verification-button">인증번호 발송</Button> */}
              <Button className="submit-button" type="submit">
                회원가입
              </Button>
            </form>
          </>
        )}
      </Formik>
    </section>
  );
};
const container = css`
  max-width: 58rem;
  margin: 0 auto;

  h1 {
    padding-top: 5rem;
    text-align: center;
    font-size: 3.2rem;
  }
`;

const formStyle = css`
  margin-top: 4rem;
  width: 100%;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  padding: 6rem 7rem;
  font-size: 1.6rem;
  box-sizing: border-box;
  border: 0.1rem solid #e5e5e5;

  h2 {
    font-size: 2.4rem;
    line-height: 3.4rem;
    color: #252525;
    font-weight: normal;
  }
  h3 {
    display: block;
    font-size: 1.2rem;
    color: #000;
    font-weight: normal;
    margin-top: 4rem;
  }
  .verification-button {
    max-width: 152px;
    float: right;
    display: inline-block;
    height: 4.2rem;
    padding: 0 3.1rem;
    color: #252525;
    border: 0.1rem solid #dbdbdb;
    border-radius: 3rem;
    box-sizing: border-box;
    margin-top: 3rem;
    background: #fff;
    margin-bottom: 3rem;
  }
  .submit-button {
    display: block;
    margin-top: 3rem;
    width: 100%;
    height: 5rem;
    padding: 0;
    border: 0;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    color: #191919;
    background-color: #f6f6f6;
  }
`;

const emailInputStyle = css`
  position: relative;
  ul {
    margin-top: 2.2rem;
  }
  ul > li {
    font-size: 1.2rem;
    margin-top: 0.7rem;
    color: #999;
    list-style: inside;
  }
`;
const nicknameInputStyle = css`
  position: relative;

  .nickname-limit {
    position: absolute;
    top: 2.5rem;
    right: 0;
    font-size: 1.2rem;
    color: #adadad;
    line-height: 2.2rem;
  }
`;
export default SignUpForm;
