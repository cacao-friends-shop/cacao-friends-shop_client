import React from 'react';
import { Formik } from 'formik';
import { css } from '@emotion/react';
import Input from 'components/atoms/Input';
import IconButton from 'components/molecules/IconButton';
import Button from 'components/atoms/Button';
interface Props {}

const AgreementForm = (props: Props) => {
  return (
    <section css={container}>
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
              <h2>
                카카오계정
                <br /> 서비스약관에 동의해 주세요.
              </h2>
              <div>
                <Input
                  type="checkbox"
                  title="totalAgreement"
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
                  title="ageAgreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="만 14세 이상입니다."
                  value={values.moreThanFourteen}
                />
              </div>
              <div className="flex-row">
                <Input
                  type="checkbox"
                  title="accountAgreement"
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
                    title="serviceAgreement"
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
                  title="adAgreement"
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
                  title="personalInfoAgreement"
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
                  title="locationAgreement"
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
                  title="profileAgreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="[선택] 프로필 정보 추가 수집 동의"
                  value={values.moreThanFourteen}
                />
                <IconButton name="arrowRight" size={18} />
              </div>
              <Button className="agree-button" type="submit">
                로그인
              </Button>
            </form>
          </>
        )}
      </Formik>
    </section>
  );
};

const container = css`
  max-width: 52rem;
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
  font-size: 1rem;
  box-sizing: border-box;
  border: 0.1rem solid #e5e5e5;

  h2 {
    margin-bottom: 2.3rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }

  h2 ~ div {
    margin-top: 2rem;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    color: #ccc;
    transform: translateY(3px);
  }
  input {
    opacity: 0;
    z-index: 1000;
    position: relative;
  }

  .agree-button {
    width: 100%;
    height: 5rem;
    padding: 0;
    border: 0;
    border-radius: 0.44rem;
    font-size: 1.5rem;
    color: #191919;
    background-color: #f6f6f6;
    margin-top: 4rem;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
  }
  .all-agreed label {
    color: #333;
    font-size: 1.7rem;
    line-height: 2.2rem;
    font-weight: 700;
    display: inline-block;
    margin-left: 0.8rem;
  }
  .sub-desc {
    padding: 1rem 4rem 2rem 2.8rem;
    border-bottom: 0.1rem solid #e5e5e5;
    font-size: 1.2rem;
    color: #959595;
    word-break: keep-all;
    line-height: 150%;
  }
  input + label {
    margin-left: 0.8rem;
    font-size: 1.4rem;
  }
`;
export default AgreementForm;
