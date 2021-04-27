import React from 'react';
import { css } from '@emotion/react';

type TitleProps = {
  /** 헤딩 레벨 */
  headingNumber: number;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Title = ({ headingNumber, ...restProps }: TitleProps) => {
  return React.createElement(`h${headingNumber}`, {
    css: titleStyle,
    ...restProps,
  });
};

const titleStyle = css`
  font-size: 1rem;
  font-weight: bold;
`;

export default Title;
