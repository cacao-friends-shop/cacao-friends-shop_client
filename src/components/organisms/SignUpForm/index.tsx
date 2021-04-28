import React from 'react';
import { Formik } from 'formik';
import { css } from '@emotion/react';
import Input from 'components/atoms/Input';
import IconButton from 'components/molecules/IconButton';

interface Props {}

const SignUpForm = (props: Props) => {
  return (
    <section css={SignUpFormStyle}>
      <h1>KaKao</h1>
      <Formik
        initialValues={{ allAgreed: false, moreThanFourteen: false }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <>
            <form css={formStyle} noValidate onSubmit={handleSubmit}>
              <h2>카카오계정 정보를 입력해 주세요.</h2>
              <div>
                <Input
                  type="checkbox"
                  title="agreement"
                  className="all-agreed"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="모두 동의합니다."
                  value={values.allAgreed}
                />
                <p className="sub-desc">
                  전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
                  개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한
                  동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.
                </p>
              </div>
              <div>
                <Input
                  type="checkbox"
                  title="agreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="만 14세 이상입니다."
                  value={values.moreThanFourteen}
                />
              </div>
              <div className="flex-row">
                <Input
                  type="checkbox"
                  title="agreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="[필수] 카카오계정 약관"
                  value={values.moreThanFourteen}
                />
                <IconButton name="arrowRight" size={18} />
              </div>
              <div>
                <div className="flex-row">
                  <Input
                    type="checkbox"
                    title="agreement"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="[필수] 카카오 통합서비스 약관"
                    value={values.allAgreed}
                  />
                  <IconButton name="arrowRight" size={18} />
                </div>
                <p className="sub-desc">
                  본 약관은 회사가 제공하는 카카오, Daum, Melon 서비스 등에 공통
                  적용되며, 본 약관에 동의함으로써 해당 서비스들을 별도 이용계약
                  체결 없이 이용할 수 있습니다.
                </p>
              </div>
              <div className="flex-row">
                <Input
                  type="checkbox"
                  title="agreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="[선택] 카카오알림 채널 추가 및 광고메시지 수신"
                  value={values.moreThanFourteen}
                />
                <IconButton name="arrowRight" size={18} />
              </div>
              <div className="flex-row">
                <Input
                  type="checkbox"
                  title="agreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="[필수] 개인정보 수집 및 이용 동의"
                  value={values.moreThanFourteen}
                />
                <IconButton name="arrowRight" size={18} />
              </div>
              <div className="flex-row">
                <Input
                  type="checkbox"
                  title="agreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="[선택] 위치정보 수집 및 이용 동의"
                  value={values.moreThanFourteen}
                />
                <IconButton name="arrowRight" size={18} />
              </div>
              <div className="flex-row">
                <Input
                  type="checkbox"
                  title="agreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="[선택] 프로필 정보 추가 수집 동의"
                  value={values.moreThanFourteen}
                />
                <IconButton name="arrowRight" size={18} />
              </div>
              <button className="agree-button" type="submit">
                로그인
              </button>
            </form>
          </>
        )}
      </Formik>
    </section>
  );
};
const SignUpFormStyle = css`
  max-width: 580px;
  margin: 0 auto;

  h1 {
    padding-top: 50px;
    text-align: center;
    font-size: 3.2rem;
  }
`;

const formStyle = css`
  margin-top: 40px;
  width: 100%;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  padding: 60px 70px;
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;

  h2 {
    font-size: 24px;
    line-height: 34px;
    color: #252525;
    font-weight: normal;
  }
`;
export default SignUpForm;
