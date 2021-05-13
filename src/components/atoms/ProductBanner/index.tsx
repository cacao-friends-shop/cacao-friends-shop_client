import { css } from '@emotion/react';
import { colors, fontSizes } from 'theme';

type ProductBannerProps = {
  /** 배너 타이틀 */
  title?: string;
  /** 배너 이미지 */
  imgURL: string;
};

const ProductBanner = ({ title, imgURL }: ProductBannerProps) => {
  return (
    <div css={bannerStyle}>
      <img src={imgURL} alt={title} />
      <span>{title}</span>
    </div>
  );
};

const bannerStyle = css`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    max-width: 64rem;
  }

  span {
    color: ${colors.white};
    font-size: ${fontSizes.xxxl_24};
    font-weight: bold;
    position: absolute;
    left: 7%;
    top: 45%;
  }
`;

export default ProductBanner;
