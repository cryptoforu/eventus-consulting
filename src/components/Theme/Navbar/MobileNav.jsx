import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { Popover, Dialog, Button, Link } from "../../Elements/Index";
import { MenuIcon } from "./Index";

const MobileNav = ({ items, ...props }) => {
  let ref = React.useRef();
  let state = useOverlayTriggerState(props);
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    ref
  );
  return (
    <div className="lg:hidden">
      <Button
        {...triggerProps}
        buttonRef={ref}
        variant="outline"
        className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
      >
        <MenuIcon />
      </Button>
      <AnimatePresence initial={false}>
        {state.isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={state.isOpen && { opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          >
            <Popover {...props} triggerRef={ref} state={state}>
              <Dialog {...overlayProps}>
                {items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="rounded-md py-2 px-3 inline-flex items-center text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </Dialog>
            </Popover>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
