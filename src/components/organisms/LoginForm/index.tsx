import React, { useRef, useEffect } from 'react';
import { Formik } from 'formik';
import Input from 'components/atoms/Input';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

interface Props {}

const LoginForm = (props: Props) => {
  // const emailInputRef = useRef<any>(null);
  // const passwordInputRef = useRef<any>(null);

  // useEffect(() => {
  //   emailInputRef.current?.addEventListenr('click');
  //   passwordInputRef.current?.addEventListner('click');
  // }, [emailInputRef, passwordInputRef]);

  return (
    <section css={loginFormStyle}>
      <h1>KaKao</h1>
      <Formik
        initialValues={{ email: '', password: '', agreement: false }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <>
            <form css={formStyle} noValidate onSubmit={handleSubmit}>
              <Input
                type="email"
                title="email"
                label="카카오 아이디, 이메일, 전화번호"
                onChange={handleChange}
                className="first-input"
                onBlur={handleBlur}
                value={values.email}
              />
              <Input
                type="password"
                title="password"
                label="비밀번호"
                onChange={handleChange}
                onBlur={handleBlur}
                className="second-input"
                value={values.password}
              />
              <Input
                type="checkbox"
                title="agreement"
                className="third-input"
                onChange={handleChange}
                label="로그인 상태유지"
                onBlur={handleBlur}
                value={values.agreement}
              />
              <button type="submit">로그인</button>
            </form>
          </>
        )}
      </Formik>
      <Link to="/signup">회원가입</Link>
    </section>
  );
};
const loginFormStyle = css`
  max-width: 420px;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  width: 100%;
  padding: 60px 70px;
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;

  h1 {
    margin: 0 0 30px 0;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 47px;
    line-height: 47px;
    color: #ccc;
  }
  input[type='email'],
  input[type='password'] {
    width: 100%;
    height: 48px;
    border-width: 0 0 2px 0;
    border-color: #ebebeb;
    font-size: 15px;
    padding: 11px 70px 8px 0;
    color: #252525;
    outline: 0;
    border-radius: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  input[type='checkbox'] {
    opacity: 0;
  }
  input[type='checkbox'] + label {
    position: initial;
    font-size: 14px;
    line-height: 20px;
    margin-left: 10px;
    color: #252525;
  }
  input[type='checkbox'] + label::after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #e5e5e5;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  a {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
  }
  button {
    width: 100%;
    background: #fee500;
    height: 50px;
    padding: 0;
    border: 0;
    border-radius: 4px;
    font-size: 15px;
    color: #191919;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

const formStyle = css`
  .first-input input:focus {
    & + label {
      opacity: 0;
    }
  }
  .second-input input:focus {
    & + label {
      opacity: 0;
    }
  }
  .third-input {
    margin-top: 30px;
  }
`;
export default LoginForm;
