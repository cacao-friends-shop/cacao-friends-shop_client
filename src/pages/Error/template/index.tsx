import { css } from '@emotion/react';
import { colors, fontSizes } from 'theme';
import getPublicAsset from 'utils/getPublicAsset';

const Template = () => {
  return (
    <div css={container}>
      <img src={getPublicAsset('assets/error_img.png')} alt="에러 이미지" />
      <p>서비스 이용에 불편을 드려 죄송합니다.</p>
      <p>지금 당장 개발자를 호출하도록 하겠습니다!!</p>
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
  padding-top: 7rem;
  text-align: center;

  img {
    margin: 0 auto;
  }

  p {
    margin-top: 3rem;
    font-size: ${fontSizes.xxl_22};
    font-weight: bold;
  }

  p:last-child {
    font-size: ${fontSizes.base_16};
    color: ${colors.pink};
    font-weight: normal;
  }
`;

export default Template;
