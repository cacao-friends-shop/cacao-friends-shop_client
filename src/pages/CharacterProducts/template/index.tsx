import React, { useState } from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import { colors, fontSizes } from 'theme';
import ModalOverlay from 'components/atoms/ModalOverlay';
import SortBox from 'components/molecules/SortBox';
import Navbar from 'components/molecules/Navbar';
import ProductBanner from 'components/atoms/ProductBanner';
import ProductCardList from 'components/organisms/ProductCardList';
import ProductTotalCount from 'components/atoms/ProductTotalCount';
import { options } from 'staticData/index';

type TemplateProps = {
  title: string;
  imgURL: string;
};

const Template = ({ title, imgURL }: TemplateProps) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div css={container}>
      <Navbar title={title} />
      <ProductBanner title={title} imgURL={imgURL} />
      <Button
        css={buttonStyle}
        bgColor="transparent"
        onClick={() => setIsShow(true)}
      >
        {options[selectedIdx].label}
        <Icon name="arrowDown" size={20} />
      </Button>
      {isShow && (
        <>
          <ModalOverlay onClick={() => setIsShow(false)} />
          <SortBox
            options={options}
            selectedIdx={selectedIdx}
            setSelectedIdx={setSelectedIdx}
            setIsShow={setIsShow}
          />
        </>
      )}
      <ProductTotalCount totalCount={30} />
      <ProductCardList />
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
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
