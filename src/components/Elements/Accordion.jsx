import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Button } from "./Index";
const Accordion = ({ i, expanded, setExpanded, children, buttonLabel }) => { 
  const isOpen = i === expanded;
  return (
    <>
      <Button
        variant={isOpen ? 'solid' : 'outline'}
        color={isOpen ? 'gradPurple' : 'gray'}
        onPress={setExpanded}
        className={clsx('text-lg font-semibold mb-2', {'text-white': isOpen, 'text-slate-800 dark:text-slate-200': !isOpen})}
      >
        {buttonLabel}
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
            <ContentPlaceholder>
                {children}
            </ContentPlaceholder>
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
