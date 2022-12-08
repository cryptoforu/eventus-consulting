import { useButton } from "react-aria";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const baseStyles = {
  solid:
    "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)]  outline-2 outline-offset-2 transition-colors",
    icon: 'inline-flex',
    badge: 'text-base font-semibold mr-2 px-2.5 py-0.5 rounded',
    rounded: 'rounded-full  py-2 px-4 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
    link: 'relative -my-2 -mx-3 rounded-lg px-3 py-2 text-base font-semibold transition-colors delay-50 hover:delay-[0ms]'
};

const variantStyles = {
  solid: {
    cyan:
      "relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors",
    white:
      "bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70",
    gray:
      "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80",
      gradPurple: 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
  },
  outline: {
    gray:
      "border-gray-300 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80",
  },
  icon: {
    gray: ''
  },
  badge: {
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
  },
  rounded: {
    cyan: 'bg-sky-300 text-slate-900 text-base hover:bg-sky-200 active:bg-sky-500 focus-visible:outline-sky-300/50',
    gray: 'bg-slate-800 text-white hover:bg-slate-700 active:text-slate-400 focus-visible:outline-white/50',
    gradPurple: 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
  },
  link: {
    gray: ''
  }
};

const MButton = React.forwardRef((props, ref) => {
  let { buttonProps } = useButton(props, ref);
  let { children, className, variant = "solid", color = "gray" } = props;
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );
  return (
    <button {...buttonProps} ref={ref} className={className}>
      {children}
    </button>
  );
});

export const Button = motion(MButton, { forwardMotionProps: true });
