import React, { useState, useRef, useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { css } from '@emotion/react';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { emailConfirmRequest, nicknameConfirmRequest } from 'apis/User';
import { signupAction } from 'modules/User/actions';
import { RootState } from 'saga';
import { SignupUserInfo } from 'types/User';
import * as Yup from 'yup';
import { colors, fontSizes } from 'theme';
import { useHistory } from 'react-router-dom';

type PasswordsType = {
  password: string;
  confirmPassword: string;
  [key: string]: string;
};
type ValidInitialState = {
  email: boolean;
  password: boolean;
  nickname: boolean;
  phoneNum: boolean;
  allValid: boolean;
};
type Validation = {
  type: string;
};

const signupValidation = Yup.object().shape({
  email: Yup.string()
    .email('이메일 포맷에 맞게 넣어주세요')
    .required('이메일을 넣어주세요'),
  password: Yup.string()
    .min(8, '최소 8글자입니다')
    .max(32, '최대 32글자입니다'),
});
const validationReducer = (
  state: ValidInitialState,
  action: Validation
): ValidInitialState => {
  switch (action.type) {
    case 'email':
      return {
        ...state,
        email: true,
      };
    case 'password':
      return {
        ...state,
        password: true,
      };
    case 'nickname':
      return {
        ...state,
        nickname: true,
      };
    case 'phoneNum':
      return {
        ...state,
        phoneNum: true,
      };
    case 'allValid':
      return {
        ...state,
        allValid: true,
      };
    default:
      return {
        ...state,
      };
  }
};
const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageFromServer, setErrorMessageFromServer] = useState('');
  const [passwords, setPasswords] = useState<PasswordsType>({
    password: '',
    confirmPassword: '',
  });
  const [isValid, isValidDispatch] = useReducer(validationReducer, {
    email: false,
    password: false,
    nickname: false,
    phoneNum: false,
    allValid: true,
  });
  const numOfNickname = useRef(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    numOfNickname.current = e.target.value.length;
  };

  const blurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === 'phoneNumber' && e.target.value) {
      isValidDispatch({ type: 'phoneNum' });
      return;
    }

    const res =
      e.target.type === 'email'
        ? await emailConfirmRequest(e.target.value)
        : await nicknameConfirmRequest(e.target.value);
    if (res.data) {
      e.target.type === 'email'
        ? setErrorMessageFromServer('이미 등록된 이메일이 있습니다')
        : setErrorMessageFromServer('이미 등록된 닉네임이 있습니다');
      setTimeout(() => {
        setErrorMessageFromServer('');
      }, 2000);
    } else {
      e.target.type === 'email'
        ? isValidDispatch({ type: 'email' })
        : isValidDispatch({ type: 'nickname' });
    }
    checkValidation();
  };

  const storePassword = (e: React.FocusEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!passwords.confirmPassword) return;
    if (passwords.password !== passwords.confirmPassword) {
      setErrorMessage('두 비밀번호가 같지 않습니다');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }
    isValidDispatch({ type: 'password' });
    checkValidation();
  }, [passwords]);

  const checkValidation = () => {
    if (
      isValid.email &&
      isValid.password &&
      isValid.nickname &&
      isValid.phoneNum
    )
      isValidDispatch({ type: 'allValid' });
  };

  useEffect(() => {
    console.log(isValid);
  }, [isValid]);

  return (
    <section css={container}>
      <h1>KaKao</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          nickname: '',
          phone: '',
        }}
        validationSchema={signupValidation}
        onSubmit={signupInfo => {
          const filteredSignupInfo = Object.entries(signupInfo).filter(
            (_, idx) => idx !== 2
          );
          const entries = new Map(filteredSignupInfo);
          const newSignupInfo: SignupUserInfo = Object.fromEntries(entries);
          dispatch(signupAction(newSignupInfo));
          history.push('/');
        }}
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
              <h2>카카오계정 정보를 입력해 주세요.</h2>
              <div css={emailInputStyle}>
                <h3>카카오계정 이메일</h3>
                <Input
                  type="email"
                  title="email"
                  id="email"
                  name="email"
                  placeholder="아이디 입력"
                  onChange={handleChange}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                    handleBlur(e);
                    blurHandler(e);
                  }}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <div css={errorMessageStyle}>{errors.email}</div>
                ) : null}
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
                  id="password"
                  name="password"
                  placeholder="비밀번호 (8~32자리)"
                  onChange={handleChange}
                  onBlur={e => {
                    handleBlur(e);
                    storePassword(e);
                  }}
                  value={values.password}
                />
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  title="confirmPassword"
                  placeholder="비밀번호 재입력"
                  onChange={handleChange}
                  onBlur={e => {
                    handleBlur(e);
                    storePassword(e);
                  }}
                  value={values.password}
                />
              </div>
              {errors.password && touched.password ? (
                <div css={errorMessageStyle}>{errors.password}</div>
              ) : null}
              {errorMessage ? (
                <div css={errorMessageStyle}>{errorMessage}</div>
              ) : null}
              <div css={nicknameInputStyle}>
                <h3>닉네임</h3>
                <Input
                  type="text"
                  title="nickname"
                  name="nickname"
                  id="nickname"
                  placeholder="닉네임을 입력해주세요"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    changeHandler(e);
                  }}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                    handleBlur(e);
                    blurHandler(e);
                  }}
                  value={values.password}
                  maxLength={20}
                />
                <span className="nickname-limit">
                  {numOfNickname.current}/20
                </span>
              </div>
              <div>
                <h3>전화번호</h3>
                <Input
                  type="tel"
                  title="phone"
                  name="phone"
                  id="phone"
                  placeholder="전화번호"
                  onChange={handleChange}
                  onBlur={e => {
                    handleBlur(e);
                    blurHandler(e);
                  }}
                  value={values.phone}
                />
              </div>
              {errorMessageFromServer ? (
                <div css={errorMessageStyle}>{errorMessageFromServer}</div>
              ) : null}
              {/* <Button className="verification-button">인증번호 발송</Button> */}
              <Button
                className="submit-button"
                type="submit"
                disabled={!isValid.allValid ? true : false}
              >
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
    color: ${colors.white};
    background-color: #fee500;
  }
  .submit-button[disabled] {
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
export default SignUpForm;
