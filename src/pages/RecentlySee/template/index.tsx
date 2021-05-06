import React from 'react';
import DeletebarBase from 'components/molecules/DeletebarBase';
import { css } from '@emotion/react';
import ProductList from 'components/organisms/ProductList';
import Header from 'components/organisms/Header';
import TabComp from 'components/molecules/TabComp';
import MyTab from 'components/molecules/MyTab';

const RecentlySeeTemplate = () => {
  return (
    <>
      <Header TabComp={TabComp} MyTab={MyTab}></Header>
      <div css={container}>
        <DeletebarBase deleteMsg="전체삭제">
          최근 50개까지 저장됩니다.
        </DeletebarBase>
        <ProductList />
      </div>
    </>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
`;

export default RecentlySeeTemplate;
