import React from "react";
import { Global } from "@emotion/react";
import GlobalStyles from "styles/GlobalStyles";
import Input from "components/atoms/Input";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <div className="App">
        <Input type="text" title="fname" label="First Name" />
      </div>
    </>
  );
}

export default App;
