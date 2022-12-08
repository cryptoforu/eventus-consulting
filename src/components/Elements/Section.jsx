import React from "react";
import clsx from "clsx";

const Section = React.forwardRef((props, ref) => {
  const { id, ariaLabel, className, children } = props;
  return (
    <section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      className={clsx("py-20 sm:py-24", className)}
    >
      {children}
    </section>
  );
});

export default Section;
