import React from 'react';
import DeletebarBase from 'components/molecules/DeletebarBase';
import { css } from '@emotion/react';
import ProductListItem from 'components/molecules/ProductListItem';

const RecentlySeeTemplate = () => {
  return (
    <div css={container}>
      <DeletebarBase deleteMsg="전체삭제">
        최근 50개까지 저장됩니다.
      </DeletebarBase>
      <ProductListItem title="내사랑을 받아라이언" price={30000} />
      <ProductListItem title="내사랑을 받아라이언" price={30000} />
      <ProductListItem title="내사랑을 받아라이언" price={30000} />
      <ProductListItem title="내사랑을 받아라이언" price={30000} />
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
`;

export default RecentlySeeTemplate;
