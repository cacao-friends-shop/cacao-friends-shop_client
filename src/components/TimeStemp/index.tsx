import { css } from '@emotion/react';
import React from 'react';

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
  font-size: 13px;
  letter-spacing: -0.2px;
  color: rgb(154, 154, 158);
`;

export default TimeStemp;
