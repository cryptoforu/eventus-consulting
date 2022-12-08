import React from "react";
import clsx from "clsx";

export const Container = React.forwardRef((props, ref) => {
  const { className, children } = props;
  return (
    <div
      ref={ref}
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
});
