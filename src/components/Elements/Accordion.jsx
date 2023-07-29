import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Button } from "./Index";

function ButtonIcon({ isOpen }) {
  const path = !isOpen ? "M12 6v6m0 0v6m0-6h6m-6 0H6" : "M18 12H6";
  return (
    <motion.span
      className="rounded-full"
      style={{ backgroundColor: !isOpen ? "#3b82f6" : "#64748b" }}
      transition={{ duration: 0.5 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={path}
          pathLength={!isOpen ? 1 : 0}
        />
      </motion.svg>
    </motion.span>
  );
}

const Accordion = ({ i, expanded, setExpanded, children, buttonLabel }) => {
  const isOpen = i === expanded;
  return (
    <>
      <Button
        variant={isOpen ? "solid" : "outline"}
        color={isOpen ? "gradPurple" : "indigo"}
        onPress={setExpanded}
        className={clsx(
          "flex items-center justify-between w-full text-lg font-semibold mb-2",
          {
            "text-white": isOpen,
            "text-slate-800 dark:text-slate-200": !isOpen,
          }
        )}
      >
        <span>{buttonLabel}</span>
        <ButtonIcon isOpen={isOpen} />
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className="overflow-hidden"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder>{children}</ContentPlaceholder>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;

function ContentPlaceholder({ children }) {
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="p-8 origin-top bg-white dark:bg-black/50 shadow-lg rounded-md m-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900"
    >
      {children}
    </motion.div>
  );
}
