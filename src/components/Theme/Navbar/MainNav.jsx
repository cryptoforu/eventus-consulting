import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useHover } from "react-aria";
import { useNavbarStore } from "../../../store/main";
import { MobileNav, ThemeSelector } from "./Index";
import { Container, Button, Link, Logo } from "../../Elements/Index";
import { useSiteData } from "../../../hooks/useSiteData";
import { navigate } from "gatsby";
const hoverVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, delay: 0.2 }, 
  },
};

const MainNav = ({isHomepage, }) => {
  const { scrolled, hoveredIndex, dispatch } = useNavbarStore();
  let { hoverProps } = useHover({
    onHoverStart: (e) => dispatch({ type: "hoverNav", payload: e.target.id }),
    onHoverEnd: (e) => dispatch({ type: "hoverNav", payload: null }),
  });
  const { menuLinks } = useSiteData().menu;
  useEffect(() => {
    function onScroll() {
      dispatch({ type: "isScrolled", payload: window.scrollY > 50 });
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [dispatch]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8",
        {
          "text-slate-900 dark:text-white bg-white/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-white/75  dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75": scrolled,
          "bg-transparent text-white": !scrolled && !isHomepage,
          "bg-transparent text-slate-900 dark:text-white": !scrolled && isHomepage
        }
      )}
    >
      <nav>
        <Container className="relative z-50 flex justify-between py-4">
          <div className="relative z-10 flex items-center gap-16">
            <Link to="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              {menuLinks.map((item, index) => (
             <motion.span whileTap={{scale: 1.3 , borderRadius: '6px'}} transition={{type: 'spring', stiffness: 100, damping: 10, mass: 1}}>
                <Link 
                  {...hoverProps}
                  id={index}
                  key={index}
                  to={item.link}
                  partiallyActive={item.link === '/blog' && true}
                  className={clsx("relative -my-2 -mx-3 rounded-lg px-3 py-2 text-base font-semibold transition-colors delay-50 hover:delay-[0ms]", { 'hover:text-gray-900 dark:hover:text-slate-100': scrolled && isHomepage, 'hover:text-slate-200': !scrolled && !isHomepage   })}
                  activeClassName={clsx('text-cyan-500 border-b-2 border-cyan-500')}
                >
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        className="absolute inset-0 rounded-lg border-b-2 border-cyan-500"
                        layoutId="hoverBackground"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={hoverVariant}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{item.name}</span>
                </Link>
                </motion.span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <MobileNav items={menuLinks} />

            <ThemeSelector />
            <Button variant='rounded' color='gray' onPress={() => navigate('/blog')} whileTap={{scale: 1.3 , borderRadius: '6px'}} transition={{type: 'spring', stiffness: 100, damping: 10, mass: 1}} className="hidden lg:block">Blog</Button>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default MainNav;
