import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const variants = {
  spanStyle:
  "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-600 dark:bg-gradient-to-r dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200",
whiteStyle: 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200'
}


const GradientText = ({ type = "span", className, variant = 'spanStyle', children }) => {
  const GradientText = ({ ...props }) =>
    React.createElement(type, props, children);
  return (
    <GradientText className={clsx(variants[variant], className)}>
      {children}
    </GradientText>
  );
};

GradientText.propTypes = {
  type: PropTypes.element,
};

export default GradientText;
