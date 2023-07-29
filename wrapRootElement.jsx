import React from "react";
import {  I18nProvider } from "react-aria";

const wrapRootElement = ({ element }) => {

  return (
    <I18nProvider locale="bs-BA">
      {element}
    </I18nProvider>
  );
};
export default wrapRootElement;
