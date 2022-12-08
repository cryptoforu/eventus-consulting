import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGsapContext } from "../../hooks/useGsapContext";

gsap.registerPlugin(ScrollTrigger);

const ParallaxWrapper = ({ children }) => {
  const layerRef = useRef();
  const ctx = useGsapContext(layerRef);
  useLayoutEffect(() => {
    let layer = layerRef.current;
    ctx.add(() => {
      gsap.fromTo(
        layer,
        {
          y: "0",
        },

        {
          y: "-100%",
          scrollTrigger: {
            trigger: layer,
         scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, [ctx]);

  return <div className="w-full h-[60vh]" ref={layerRef}>{children}</div>;
};

export default ParallaxWrapper;
