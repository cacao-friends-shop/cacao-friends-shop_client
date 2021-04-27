import { css } from '@emotion/react';
import LinkIcon from 'components/molecules/LinkIcon';
import { colors } from 'theme';

const SideBarFooter = () => {
  return (
    <LinkIcon
      type="leftIcon"
      iconName="lock"
      iconSize={20}
      bgColor="transparent"
      css={style}
    >
      로그인
    </LinkIcon>
  );
};

const style = css`
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
