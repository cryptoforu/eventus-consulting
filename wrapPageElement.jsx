import React from "react";
import { Layout } from "./src/components/Theme/Index";

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export default wrapPageElement;
