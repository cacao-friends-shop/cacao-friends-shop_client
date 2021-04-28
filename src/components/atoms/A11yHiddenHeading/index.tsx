import React from 'react';
import { css } from '@emotion/css';

export type A11yHiddenHeadingProps = {
  /** 요소 */
  comp: string;
  /** 제목 */
  children: string;
};

type headingStype = {
  [key: string]: any;
};

const A11yHiddenHeading = ({ comp, children }: A11yHiddenHeadingProps) => {
  // const Comp = headingStype[comp];
  const Comp = React.createElement(comp, { className: A11yHidden }, children);

  return Comp;
};

const A11yHidden = css`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`;

export default A11yHiddenHeading;
