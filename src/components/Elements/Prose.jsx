import React from "react";
import clsx from "clsx";
const proseVariants = {
  base: "prose",
  lg: "prose prose-lg",
  xl: "prose prose-xl",
};
export function Prose({
  as: Component = "div",
  variant = "xl",
  className,
  ...props
}) {
  return (
    <Component
      className={clsx(
        className,
        proseVariants[variant],
        "prose-slate max-w-none dark:prose-invert  dark:text-slate-400",
        // headings
        "prose-headings:font-display prose-headings:font-bold prose-h2:text-5xl prose-headings:text-slate-800 dark:prose-headings:text-slate-200",

        // lead
        "prose-lead:bg-clip-text prose-lead:text-transparent prose-lead:bg-gradient-to-r prose-lead:from-blue-600 prose-lead:via-indigo-700 prose-lead:to-blue-600 prose-lead:dark:bg-gradient-to-r prose-lead:dark:from-indigo-200 prose-lead:dark:via-sky-400 prose-lead:dark:to-indigo-200",
        // links
        "prose-a:font-semibold dark:prose-a:text-secondary",
        // link underline
        "prose-a:no-underline prose-a:text-red-600",
        // hr
        "dark:prose-hr:border-primary-800",
        // img
        "prose-img:rounded-lg"
      )}
      {...props}
    />
  );
}
