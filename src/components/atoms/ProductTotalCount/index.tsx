import { css } from '@emotion/react';
import { fontSizes } from 'theme';

type ProductTotalCountProps = {
  /** 상품 총 갯수 */
  totalCount: number;
};

const ProductTotalCount = ({ totalCount }: ProductTotalCountProps) => {
  return (
    <div css={productTotalCountStyle}>
      총 <span>{totalCount}</span>개
    </div>
  );
};

const productTotalCountStyle = css`
  padding: 2.5rem 2rem;
  span {
    font-weight: bold;
    font-size: ${fontSizes.sm_15};
  }
`;

export default ProductTotalCount;
