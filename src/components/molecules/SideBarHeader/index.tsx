import { css } from '@emotion/react';
import NeedLogin from 'components/molecules/NeedLogin';
import LinkIcon from 'components/molecules/LinkIcon';
import { colors } from 'theme';

const SideBarHeader = () => {
  return (
    <div css={style}>
      <NeedLogin />
      <LinkIcon
        type="rightIcon"
        to="/"
        iconName="arrowRight"
        iconSize={15}
        bgColor="transparent"
        css={style_button}
      >
        비회원 주문조회
      </LinkIcon>
    </div>
  );
};

const style = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.gray};
  padding: 0 2.4rem 2.5rem;
`;

const style_button = css`
  font-size: 1.4rem;
  span {
    margin-right: 0.3rem;
  }
`;

export default SideBarHeader;
