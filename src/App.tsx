import React from "react";
import { Global } from "@emotion/react";
import GlobalStyles from "styles/GlobalStyles";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <div className="App"></div>
    </>
  );
}

export default App;
