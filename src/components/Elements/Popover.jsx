import React, {useRef} from 'react';
import {DismissButton, Overlay, usePopover} from 'react-aria';
const Popover = ({ children, state, offset = 8, ...props }) => {
let popoverRef = useRef();
let { popoverProps, underlayProps, arrowProps, placement } = usePopover({
    ...props,
    offset,
    popoverRef
  }, state);
    return (
        <Overlay>
      <div {...underlayProps} className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur" />
      <div
        {...popoverProps}
        ref={popoverRef}
        className="absolute inset-x-0 top-0 origin-top rounded-b-2xl bg-gray-50 dark:bg-black px-6 pb-6 pt-16 focus:outline-none"
      >
        <svg {...arrowProps} className="absolute w-6 h-6" data-placement={placement}>
          <path d="M0 0,L6 6,L12 0" />
        </svg>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
    );
};

export default Popover;