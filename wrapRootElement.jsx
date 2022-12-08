import React from "react";
import { SSRProvider } from "react-aria";

const wrapRootElement = ({ element }) => {

  return (
    <SSRProvider>
      {element}
    </SSRProvider>
  );
};
export default wrapRootElement;
