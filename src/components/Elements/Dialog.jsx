import React from 'react';
import {useDialog} from 'react-aria';
const Dialog = ({ title, children, ...props }) => {
    let ref = React.useRef();
    let { dialogProps, titleProps } = useDialog(props, ref);
  
    return (
      <div
        {...dialogProps}
        ref={ref}
        className='flex flex-col text-base text-slate-900 dark:text-white'
      >
        {title &&
          (
            <h3 {...titleProps} style={{ marginTop: 0 }}>
              {title}
            </h3>
          )}
        {children}
      </div>
    );
};

export default Dialog;