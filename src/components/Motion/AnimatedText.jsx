import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { Heading } from "../Elements/Index";
import { useInView } from "react-intersection-observer";
import { useIsMounted } from "../../hooks/useIsMounted";
const MotionHeading = motion(Heading);

const AnimatedCharacters = (props) => {
  const { text } = props;
  const [scope, animate] = useAnimate();
  const isMounted = useIsMounted();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  useEffect(() => {
    if (isMounted) {
      if (scope.current) {
        animate(scope.current, { opacity: 1 });
        animate("span", { opacity: 1 });
        animate(
          "span",
          { opacity: inView ? 1 : 0, y: inView ? 0 : `0.25em` },
          { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }
        );
      }
    }
  }, [inView, animate, scope, isMounted]);

  return (
    <MotionHeading headingLevel={props.level} ref={scope}>
      {text.split(" ").map((word, index) => (
        <motion.span
          ref={ref}
          aria-hidden="true"
          key={index}
          className="inline-block mr-[0.25em] whitespace-nowrap"
          transition={{
            delayChildren: index * 0.25,
            staggerChildren: 0.05,
          }}
        >
          {word.split("").map((character, index) => (
            <motion.span
              className="inline-block mr-[-0.05em]"
              aria-hidden="true"
              key={index}
            >
              {character}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </MotionHeading>
  );
};

export default AnimatedCharacters;
