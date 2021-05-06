import React, { useState } from 'react';
import { css } from '@emotion/react';
import Button from 'components/atoms/Button';
import CheckBox from 'components/atoms/CheckBox';
import { colors } from 'theme';
import IconButton from 'components/molecules/IconButton';
import IconLink from 'components/molecules/IconLink';

const ControlBar = ({ ...restProps }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div css={container} {...restProps}>
      {isShow ? (
        <div css={searchStyle}>
          <form action="">
            <fieldset>
              <legend>검색폼</legend>
              <select>
                <option value="">제목</option>
                <option value="">내용</option>
              </select>
              <label>
                <input type="text" placeholder="검색어를 입력해주세요." />
              </label>
              <IconLink iconName="search" iconSize={20} to="#" />
              <button onClick={() => setIsShow(false)}>닫기</button>
            </fieldset>
          </form>
        </div>
      ) : (
        <div css={normalStyleContainer}>
          <div css={normalStyle}>
            <CheckBox className="checkbox" />
            <Button bgColor="transparent" disabled={true}>
              삭제
            </Button>
          </div>
          <IconButton name="search" size={20} onClick={() => setIsShow(true)} />
        </div>
      )}
    </div>
  );
};

const container = css`
  width: 100%;
  border: 1px solid ${colors.adminBorderGray};
  padding: 1.3rem 1.5rem;
  border-radius: 3px;
  margin-top: 1rem;
`;

const searchStyle = css`
  fieldset {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  select {
    border: none;
    padding: 0.5rem 0.3rem;
  }
  label {
    width: 70%;
  }

  input {
    border: none;
    display: inline-block;
    width: 100%;
    padding: 0.5rem 0.3rem;
  }

  button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
  }

  button:hover {
    box-shadow: 0 0 5px 1px ${colors.adminGray};
    background-color: ${colors.white};
  }
`;

const normalStyleContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0;
`;

const normalStyle = css`
  button {
    padding: 0;
    margin-left: 1.5rem;
    vertical-align: top;
  }

  button[disabled] {
    color: ${colors.gray};
  }

  .checkbox {
    svg {
      fill: ${colors.adminGray};
    }
  }
`;

export default ControlBar;
