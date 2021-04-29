import { css } from '@emotion/react';
import { colors } from 'theme';
import IconLink from '../IconLink';

const SideBarFooter = () => {
  return (
    <IconLink
      type="leftIcon"
      to="/"
      iconName="lock"
      iconSize={20}
      bgColor="transparent"
      css={style}
    >
      로그인
    </IconLink>
  );
};

const style = css`
  display: flex;
  padding: 2rem 0;
  color: ${colors.gray};

  a {
    display: block;
  }

  span {
    font-weight: bold;
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;

export default SideBarFooter;
