import React from 'react';
import { css } from '@emotion/react';
import Title from 'components/atoms/Title';
import { colors } from 'theme';
import IconLink from 'components/molecules/IconLink';

const AdminListHeader = () => {
  return (
    <div css={style_container}>
      <div css={style_titleContainer}>
        <Title headingNumber={3} css={style_title}>
          글 관리
        </Title>
        <span css={style_count}>36</span>
      </div>
      <IconLink
        type="rightIcon"
        to="/"
        iconName="pencil"
        iconSize={12}
        bgColor={colors.white}
        css={style_link}
      >
        글쓰기
      </IconLink>
    </div>
  );
};

const style_container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const style_titleContainer = css`
  display: flex;
`;

const style_title = css`
  font-weight: 700;
`;

const style_count = css`
  color: ${colors.darkGray};
  font-size: 1.2rem;
  margin-left: 1rem;
  line-height: 1.8;
`;

const style_link = css`
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid ${colors.gray};
  border-radius: 3px;

  svg {
    fill: ${colors.gray};
  }

  &:hover {
    box-shadow: 0 0 5px 1px #c5cdd7;
  }
`;

export default AdminListHeader;
