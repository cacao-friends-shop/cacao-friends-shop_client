import { css } from '@emotion/react';
import { colors } from 'theme';

const GlobalStyles = css`
  body,
  body *,
  body::before,
  body::after,
  body *::before,
  body *::after {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    /* font: inherit; */
    vertical-align: baseline;
  }

  html {
    font-size: 10px;
    overflow-y: visible;
  }

  body {
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    background-color: #fff;
    color: ${colors.black};
  }

  a img {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  legend {
    overflow: hidden;
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }

  // TODO: 수정하기
  &:focus-visible {
    outline: none;
    border-radius: 2px;
    box-shadow: 0 0 0 4px #4ec5f1;
  }

  button {
    cursor: pointer;
    border: none;
  }

  button[disabled] {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul,
  li {
    list-style: none;
  }

  button:focus-visible {
    outline: auto blue;
  }

  img {
    -webkit-user-drag: none;
  }
`;

export default GlobalStyles;
