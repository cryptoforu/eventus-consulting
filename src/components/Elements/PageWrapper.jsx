import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { staggerContainerVariant } from "../Motion/variants";
const PageWrapper = forwardRef((props, ref) => {
  const { location, children } = props;
  return (
    <motion.div
      key={location.pathname}
      ref={ref}
      initial="hidden"
      animate="show"
      variants={staggerContainerVariant}
      {...props}
    >
      {children}
    </motion.div>
  );
});

export default PageWrapper;
