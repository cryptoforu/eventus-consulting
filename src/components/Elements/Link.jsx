import React, {useRef} from 'react'
import { motion } from 'framer-motion';
import { Link as GatsbyLink } from "gatsby"
import {useLink} from 'react-aria';
const Link = ({ children, to, activeClassName, partiallyActive, ...rest }) => {
    let ref = useRef();
    let { linkProps } = useLink(
      { children, to, activeClassName, partiallyActive, ...rest },
      ref
    );
  const internal = /^\/(?!\/)/.test(to)


  if (internal) {
    return (
       
      <GatsbyLink
        {...linkProps}
        ref={ref}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...rest}
      >
        {children}
      </GatsbyLink>
     
    )
  }
  return (
   
    <motion.a href={to} target='_blank' rel="noreferrer" {...rest}>
      {children}
    </motion.a>
   
  )
}

export default Link