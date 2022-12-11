import React from "react";
import { AnimatePresence } from "framer-motion";
import { Layout } from "./src/components/Theme/Index";

const wrapPageElement = ({ element, props }) => {
  return <AnimatePresence mode="wait"><Layout {...props}>{element}</Layout></AnimatePresence> ;
};

export default wrapPageElement;