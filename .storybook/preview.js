import React, { Fragment } from "react";
import { Global } from "@emotion/react";
import GlobalStyles from "../src/styles/GlobalStyles";

export const decorators = [
  Story => {
    return (
      <>
        <Global styles={GlobalStyles} />
        <Story />
      </>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
