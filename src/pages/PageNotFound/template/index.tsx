import { css } from '@emotion/react';
import IconLink from 'components/molecules/IconLink';
import { colors, fontSizes } from 'theme';

const Template = () => {
  return (
    <div css={container}>
      <p className="title">Oops!!</p>
      <p>해당 페이지는 찾을 수 없어요.</p>
      <img
        src="https://t1.kakaocdn.net/friends/new_store/3.0/common/ryan-shy-184.png"
        alt="라이언"
      />
      <IconLink
        iconName="home"
        iconSize={20}
        to="/"
        type="leftIcon"
        bgColor={colors.yellow}
        css={linkStyle}
      >
        Home
      </IconLink>
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 1.5rem auto;
  padding-top: 9rem;
  text-align: center;
  background-color: ${colors.adminLightGray_02};
  min-height: 83rem;

  p {
    padding-top: 2rem;
  }

  .title {
    font-size: ${fontSizes.xxxxl_28};
    font-weight: bold;
  }

  img {
    display: block;
    margin: 0 auto;
  }
`;

const linkStyle = css`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 10px;
  font-size: ${fontSizes.lg_18};
  font-weight: bold;

  span {
    margin-left: 1rem;
  }
`;

export default Template;
