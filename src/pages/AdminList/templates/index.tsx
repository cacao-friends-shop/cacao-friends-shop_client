import React from 'react';
import AdminListHeader from 'components/organisms/AdminListHeader';
import { css } from '@emotion/react';
import AdminListBody from 'components/organisms/AdminListBody';
import AdminListFooter from 'components/organisms/AdminListFooter';

const Template = () => {
  return (
    <div css={style_container}>
      <AdminListHeader />
      <AdminListBody />
      <AdminListFooter />
    </div>
  );
};

const style_container = css`
  /* background-color: pink; */
  padding: 3rem 1.75rem 0;
  max-width: 64rem;
  margin: 0 auto;
`;

export default Template;
