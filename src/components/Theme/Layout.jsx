import React from "react";
import { withPrefix } from "gatsby";
import { motion } from "framer-motion";
import { MainNav } from "./Navbar/Index";
import { BackToTop } from "./Index";
import { MainFooter } from "./Footer/Index";

const variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 2, ease: "easeInOut" },
  },
};

const Layout = ({ children, location }) => {
  const isHomePage = location.pathname === "/";
  const isDigitalGuide = location.pathname === withPrefix("/marketing-vodic/");
 
  return (
    <>
      {!isDigitalGuide && <MainNav isHomepage={isHomePage} />}

      <motion.main
        key={location.pathname}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { type: "spring", duration: 2, ease: "easeInOut" },
        }}
        variants={variants}
        className="content relative w-full h-full overflow-x-hidden flex flex-col"
      >
        {children}
        {!isDigitalGuide && (
          <>
            <MainFooter />
            <BackToTop />
          </>
        )}
      </motion.main>
    </>
  );
};

export default Layout;
