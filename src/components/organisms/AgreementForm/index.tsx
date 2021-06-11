import React, { useState, useRef } from 'react';
import { css } from '@emotion/react';
import Input from 'components/atoms/Input';
import IconButton from 'components/molecules/IconButton';
import Button from 'components/atoms/Button';
import { colors } from 'theme';
import { useHistory } from 'react-router-dom';

export const mandatoryOption = [
  'ageAgreement',
  'accountAgreement',
  'serviceAgreement',
  'personalInfoAgreement',
];
type AgreementType = {
  totalAgreement: boolean;
  ageAgreement: boolean;
  accountAgreement: boolean;
  serviceAgreement: boolean;
  adAgreement: boolean;
  personalInfoAgreement: boolean;
  locationAgreement: boolean;
  profileAgreement: boolean;
  [key: string]: boolean;
};
const AgreementForm = () => {
  const isValid = useRef(false);
  const isEveryValidationPassed = useRef(false);
  const history = useHistory();
  const [agreements, setAgreements] = useState<AgreementType>({
    totalAgreement: false,
    ageAgreement: false,
    accountAgreement: false,
    serviceAgreement: false,
    adAgreement: false,
    personalInfoAgreement: false,
    locationAgreement: false,
    profileAgreement: false,
  });

  const submitHandler = () => {
    history.push('/signup');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === 'totalAgreement') {
      setAgreements({
        totalAgreement: checked,
        ageAgreement: checked,
        accountAgreement: checked,
        serviceAgreement: checked,
        adAgreement: checked,
        personalInfoAgreement: checked,
        locationAgreement: checked,
        profileAgreement: checked,
      });
      isValid.current = checked;
    } else {
      let filteredAgreements: string[] = [];

      for (const agreement in agreements) {
        if (agreements[agreement]) {
          filteredAgreements.push(agreement);
        }
      }

      if (checked) {
        filteredAgreements.push(name);
      } else {
        //인덱스로 찾아서 없애는 로직 생각하기 (인덱스로 찾아서 splice로 없애기)
        const idx = filteredAgreements.indexOf(name);
        if (idx !== -1) filteredAgreements.splice(idx, 1);
      }

      isValid.current = mandatoryOption.every(e =>
        filteredAgreements.includes(e)
      );
      isEveryValidationPassed.current =
        filteredAgreements.length === 7 ? true : false;
      if (!isEveryValidationPassed.current || !checked) {
        setAgreements({
          ...agreements,
          totalAgreement: false,
          [name]: checked,
        });
      } else {
        setAgreements({
          ...agreements,
          totalAgreement: true,
          [name]: checked,
        });
      }
    }
  };

  const {
    totalAgreement,
    ageAgreement,
    accountAgreement,
    serviceAgreement,
    adAgreement,
    personalInfoAgreement,
    locationAgreement,
    profileAgreement,
  } = agreements;

  return (
    <section css={container}>
      <h1>KaKao</h1>
      <>
        <form css={formStyle} onSubmit={submitHandler} noValidate>
          <h2>
            카카오계정
            <br /> 서비스약관에 동의해 주세요.
          </h2>
          <div>
            <Input
              type="checkbox"
              title="agreement"
              id="totalAgreement"
              className="all-agreed"
              onChange={handleChange}
              label="모두 동의합니다."
              name="totalAgreement"
              checked={totalAgreement}
            />
            <p className="sub-desc">
              전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
              개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한 동의를
              거부하시는 경우에도 서비스는 이용이 가능합니다.
            </p>
          </div>
          <div>
            <Input
              type="checkbox"
              title="agreement"
              id="ageAgreement"
              onChange={handleChange}
              label="[필수] 만 14세 이상입니다."
              name="ageAgreement"
              checked={ageAgreement}
            />
          </div>
          <div className="flex-row">
            <Input
              type="checkbox"
              title="agreement"
              id="accountAgreement"
              onChange={handleChange}
              label="[필수] 카카오계정 약관"
              name="accountAgreement"
              checked={accountAgreement}
            />
            <IconButton name="arrowRight" size={18} />
          </div>
          <div>
            <div className="flex-row">
              <Input
                type="checkbox"
                id="serviceAgreement"
                title="agreement"
                onChange={handleChange}
                label="[필수] 카카오 통합서비스 약관"
                name="serviceAgreement"
                checked={serviceAgreement}
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
              id="adAgreement"
              onChange={handleChange}
              label="[선택] 카카오알림 채널 추가 및 광고메시지 수신"
              name="adAgreement"
              checked={adAgreement}
            />
            <IconButton name="arrowRight" size={18} />
          </div>
          <div className="flex-row">
            <Input
              type="checkbox"
              title="agreement"
              id="personalInfoAgreement"
              onChange={handleChange}
              label="[필수] 개인정보 수집 및 이용 동의"
              checked={personalInfoAgreement}
              name="personalInfoAgreement"
            />
            <IconButton name="arrowRight" size={18} />
          </div>
          <div className="flex-row">
            <Input
              type="checkbox"
              title="agreement"
              id="locationAgreement"
              onChange={handleChange}
              label="[선택] 위치정보 수집 및 이용 동의"
              checked={locationAgreement}
              name="locationAgreement"
            />
            <IconButton name="arrowRight" size={18} />
          </div>
          <div className="flex-row">
            <Input
              type="checkbox"
              title="agreement"
              id="profileAgreement"
              onChange={handleChange}
              label="[선택] 프로필 정보 추가 수집 동의"
              checked={profileAgreement}
              name="profileAgreement"
            />
            <IconButton name="arrowRight" size={18} />
          </div>
          <Button
            css={agreeButtonStyle}
            type="submit"
            disabled={isValid.current ? false : true}
          >
            로그인
          </Button>
        </form>
      </>
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
    padding-left: 10px;
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
  label {
    margin-left: 1rem;
  }
`;
const agreeButtonStyle = css`
  width: 100%;
  height: 5rem;
  padding: 0;
  border: 0;
  border-radius: 0.44rem;
  font-size: 1.5rem;
  color: ${colors.white};
  background-color: #fee500;
  margin-top: 4rem;

  &[disabled] {
    color: #191919;
    background-color: #f6f6f6;
  }
`;

export default AgreementForm;
