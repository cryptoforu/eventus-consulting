import React, {useEffect} from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import clsx from "clsx";
import { Button } from "../Elements/Index";
import { useButtonStore } from "../../store/main";

const BackToTop = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const { show, dispatch } = useButtonStore();
  const { scrollYProgress, scrollY } = useScroll();

  const isBrowser = typeof window !== "undefined" ? true : false;
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      dispatch({type: 'showBtn', payload: latest > 100})
    })
  }, [dispatch, scrollY])
  const goToTop = () => {
    if (isBrowser) {
      gsap.to(window, {duration: 2, scrollTo: 0})
    
    }
  };
  const pathL = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="relative overflow-hidden">
    <Button
      variant="icon"
      onPress={() => goToTop()}
      className={clsx({
        "fixed bottom-10 right-6 z-50 bg-transparent": show,
        hidden: !show,
      })}
    >
      <motion.svg
      whileHover={{y: -10, scale: 1.01}}
        id="progress"
        width="75"
        height="75"
        viewBox="0 0 100 100"
        className="fill-transparent stroke-2 hover:fill-black/20"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          pathLength="1"
          className="stroke-cyan-400 dark:stroke-black"
        ></circle>

        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-black dark:stroke-cyan-400"
          style={{ pathLength: pathL }}
        ></motion.circle>

        <motion.path
          className="fill-cyan-400 dark:fill-slate-100 stroke-1"
          style={{ translateX: 26, translateY: 18 }}
          fill=""
          d="M42 38L39 41 24 26.147 9 41 6 38 24 20z"
        />
      </motion.svg>
    </Button>
    </div>
  );
};

export default BackToTop;
