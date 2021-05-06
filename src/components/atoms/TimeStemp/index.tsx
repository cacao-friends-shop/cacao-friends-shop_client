import { css } from '@emotion/react';
import React from 'react';
import { colors } from 'theme';

type TimeStempProps = {
  /** 시간 입력 */
  time: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const TimeStemp = ({ time, ...restProps }: TimeStempProps) => {
  return (
    <span css={timeStempStyle} {...restProps}>
      {time}
    </span>
  );
};

const timeStempStyle = css`
  font-size: 1.3rem;
  letter-spacing: -0.2px;
  color: ${colors.gray};
`;

export default TimeStemp;
