import React, { useState } from 'react';
import { css } from '@emotion/react';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import Header from 'components/organisms/Header';
import { colors, fontSizes } from 'theme';
import ModalOverlay from 'components/atoms/ModalOverlay';
import SortBox from 'components/atoms/SortBox';
import Navbar from 'components/molecules/Navbar';

const Template = () => {
  const [isShow, setIsShow] = useState(false);
  // const [check, setCheck] = useState({
  //   sold: true,
  //   lower: false,
  //   expensive: false,
  // });

  return (
    <div css={container}>
      <Navbar title="어피치" />
      <div css={bannerStyle}>
        <img src="assets/Category_Apeach.jpg" alt="" />
        <span>어피치</span>
      </div>
      <Button
        css={buttonStyle}
        bgColor="transparent"
        onClick={() => setIsShow(true)}
      >
        신상품순
        <Icon name="arrowDown" size={20} />
      </Button>
      {isShow && (
        <>
          <ModalOverlay onClick={() => setIsShow(false)} />
          <SortBox />
        </>
      )}
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
`;

const bannerStyle = css`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    max-width: 64rem;
  }

  span {
    color: ${colors.white};
    font-size: ${fontSizes.xxxl_24};
    font-weight: bold;
    position: absolute;
    left: 7%;
    top: 45%;
  }
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: ${fontSizes.base_16};
  border-bottom: 1px solid ${colors.lightGray};
`;

export default Template;
