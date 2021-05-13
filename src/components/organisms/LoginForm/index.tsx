import React from 'react';
import { Formik } from 'formik';
import Input from 'components/atoms/Input';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOG_IN } from 'saga/User/actions';
import * as Yup from 'yup';
import { colors, fontSizes } from 'theme';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('이메일 포맷에 맞게 넣어주세요')
    .required('이메일을 넣어주세요'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <section css={container}>
      <article css={loginFormContainer}>
        <h1>KaKao</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => {
            dispatch({ type: LOG_IN, authUser: values });
          }}
          validationSchema={LoginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <>
              <form css={formStyle} noValidate onSubmit={handleSubmit}>
                <Input
                  type="email"
                  title="email"
                  placeholder="카카오 아이디, 이메일, 전화번호"
                  onChange={handleChange}
                  className="first-input"
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Input
                  type="password"
                  title="password"
                  placeholder="비밀번호"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="second-input"
                  value={values.password}
                />

                {/* <Input
                  type="checkbox"
                  title="agreement"
                  className="third-input"
                  onChange={handleChange}
                  placeholder="로그인 상태유지"
                  onBlur={handleBlur}
                  value={values.agreement}
                /> */}
                {errors.email && touched.email ? (
                  <div css={errorMessageStyle}>{errors.email}</div>
                ) : null}

                <button type="submit">로그인</button>
              </form>
            </>
          )}
        </Formik>
        <Link to="/signup">회원가입</Link>
      </article>
    </section>
  );
};
const container = css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  background-color: ${colors.white};
`;
const loginFormContainer = css`
  max-width: 42rem;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  margin: 0 auto;
  width: 100%;
  padding: 6rem 7rem;
  font-size: 1.6rem;
  box-sizing: border-box;
  border: 0.1rem solid #e5e5e5;

  h1 {
    margin: 0 0 3rem 0;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    color: #ccc;
  }
  input[value='true'] + svg {
    color: #fee500;
  }
  label {
    position: absolute;
    top: -15px;
    left: 20px;
    width: 100%;
    height: 4.7rem;
    line-height: 4.7rem;
    color: #ccc;
  }
  input[type='email'],
  input[type='password'] {
    width: 100%;
    height: 4.8rem;
    border-width: 0 0 0.2rem 0;
    border-color: #ebebeb;
    font-size: 1.5rem;
    padding: 1.1rem 7rem 0.8rem 0;
    color: #252525;
    outline: 0;
    border-radius: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  input[type='checkbox'] {
    opacity: 0;
    z-index: 1000;
    position: relative;
  }
  input[type='checkbox'] + label {
    position: initial;
    font-size: 1.4rem;
    line-height: 2rem;
    margin-left: 1rem;
    color: #252525;
  }
  input[type='checkbox'] + label::after {
    content: '';
    width: 2rem;
    height: 2rem;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #e5e5e5;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  a {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.7);
  }
  button {
    width: 100%;
    background: #fee500;
    height: 5rem;
    padding: 0;
    border: 0;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    color: #191919;
    margin-top: 4rem;
    margin-bottom: 3rem;
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
    margin-top: 3rem;
  }
`;
const errorMessageStyle = css`
  height: 70px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  padding: 0 2rem;
  font-size: ${fontSizes.xs_14};
  color: ${colors.red};
  background-color: ${colors.lightGray};
`;
export default LoginForm;
