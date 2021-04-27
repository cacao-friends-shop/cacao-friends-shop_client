import { css } from '@emotion/react';
import { colors } from 'theme';

type DividerProps = {
  /** 디바이더 width */
  width?: string;
  /** 디바이더 굵기 */
  weight?: number;
  /** 디바이더 color */
  color?: string;
};

const Divider = ({
  width = '100%',
  weight = 1,
  color = colors.gray,
}: DividerProps) => {
  return <div css={style(width, weight, color)}></div>;
};

const style = (width: string, weight: number, color: string) => css`
  width: ${width};
  border-bottom: ${weight}px solid ${color};
`;

export default Divider;
