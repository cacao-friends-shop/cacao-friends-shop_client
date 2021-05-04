import React from 'react';
import DeletebarBase from 'components/molecules/DeletebarBase';
import { css } from '@emotion/react';
import ProductList from 'components/organisms/ProductList';

const RecentlySeeTemplate = () => {
  return (
    <div css={container}>
      <DeletebarBase deleteMsg="전체삭제">
        최근 50개까지 저장됩니다.
      </DeletebarBase>
      <ProductList />
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
`;

export default RecentlySeeTemplate;
