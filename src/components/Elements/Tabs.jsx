import { useTabListState } from "react-stately";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useTab, useTabList, useTabPanel } from "react-aria";
import clsx from "clsx";

export function Tab({ item, state, className, ...props }) {
  let { key, rendered } = item;
  let ref = React.useRef();
  let { tabProps, isSelected } = useTab({ key }, state, ref);
  const tabVariant = {
    initial: false,
    animate: {
      y: -10,
      scale: 1.02,
    },
  };
  return (
    <motion.div
      variants={tabVariant}
      whileHover="animate"
      {...tabProps}
      ref={ref}
      className={clsx(
        "relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur overflow-hidden cursor-pointer",
        isSelected ? "text-sky-300" : "text-slate-300"
      )}
      {...props}
    >
      <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
      <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
      {isSelected && (
        <motion.div
          className="absolute bottom-0 left-0 h-2 z-0 w-full rounded-b-2xl bg-gradient-to-r from-cyan-400 to-blue-400"
          layoutId="underline"
        />
      )}
      {rendered}
    </motion.div>
  );
}

export function TabPanel({ state, ...props }) {
  let ref = React.useRef();
  let { tabPanelProps } = useTabPanel(props, state, ref);
  let { className } = props;
  return (
    <div {...tabPanelProps} ref={ref} className={clsx(className)}>
      {state.selectedItem?.props.children}
    </div>
  );
}

const Tabs = (props) => {
  let state = useTabListState(props);
  let ref = React.useRef();
  let { tabListProps } = useTabList(props, state, ref);

  return (
    <div className="hidden sm:block">
      <div className="relative">
        <div {...tabListProps} ref={ref} className={"flex space-x-4"}>
          {[...state.collection].map((item) => (
            <Tab key={item.key} item={item} state={state} />
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={state.selectedItem?.key}
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 1000, opacity: 0 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <TabPanel key={state.selectedItem?.key} state={state} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Tabs;
