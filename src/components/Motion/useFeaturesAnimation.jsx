import { useAnimate, useInView, stagger } from "framer-motion";
import { useEffect, useMemo } from "react";

const staggerItems = stagger(0.1, { startDelay: 0.15 });

const useFeaturesAnimation = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    amount: 0.5
  });

  const sequence = useMemo(() => [
    [scope.current, { opacity: 1 }, { duration: 0.5 }],
    ["#text", { opacity: 1 }, { ease: "easeInOut" }],
    ["#text span", { x: 0, opacity: 1 }, { at: "+0.2" }],
    ["#text h2", { x: 0, opacity: 1 }, { at: "+0.2" }],
    [
      "#items",
      { y: 0, opacity: 1 },
      { at: "+0.2", duration: 0.2, delay: staggerItems },
    ],
  ], [scope]) 

  const reverseSequence = useMemo(() => [
    [scope.current, { opacity: 0 }, { duration: 0.5 }],
    ["#text", { opacity: 0 }, { ease: "easeInOut" }],
    ["#text span", { x: -50, opacity: 0 }, { at: "+0.2" }],
    ["#text h2", { x: -100, opacity: 0 }, { at: "+0.2" }],
    [
      "#items",
      { y: -300, opacity: 0 },
      { at: "+0.2", duration: 0.2, delay: staggerItems },
    ],
  ], [scope]) 
  useEffect(() => {
    if (isInView) {
    scope.current &&  animate(sequence);
    } else {
      scope.current &&  animate(reverseSequence)
    }
  }, [isInView, animate, scope, sequence, reverseSequence]);
  return scope;
};
export default useFeaturesAnimation
