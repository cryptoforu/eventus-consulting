import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const styleVariants = {
  white: 'font-extrabold tracking-tight text-white',
  slate: 'font-extrabold tracking-tight text-slate-900',
  base: 'font-display font-bold text-slate-800 dark:text-slate-200 tracking-tight'
}


const Heading = ({ headingLevel = "p", variant = 'base', children, className }) => {
  const Heading = ({ ...props }) =>
    React.createElement(headingLevel, props, children);

  return <Heading className={clsx(styleVariants[variant], className)}>{children}</Heading>;
};

Heading.propTypes = {
  headingLevel: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
};

export default Heading;
