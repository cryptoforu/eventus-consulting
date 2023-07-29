import React, { useCallback, useEffect, useRef } from "react";
import flattenChildren from "react-keyed-flatten-children";
import { Section } from "../Elements/Index";
import gsap from "gsap";
import { useIsMounted } from "../../hooks/useIsMounted";



const HorizontallWraper = ({ children }) => {
  const panels = useRef([]);
  const panelsContainer = useRef();
  const isMounted = useIsMounted();

  

  const getWidth = useCallback(() => {
    let maxWidth = 0;
    if (panels.current) {
      panels.current.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    }
    return maxWidth;
  }, []);

  useEffect(() => {
    
      if (isMounted()) {
        let maxWidth = getWidth();
        const ctx = gsap.context(() => {
          gsap.to(panels.current, {
            x: () => `-${maxWidth - window.innerWidth}`,
            ease: "none",

            scrollTrigger: {
              trigger: panelsContainer.current,
              pin: true,
              scrub: 1,
              end: () => `+=${maxWidth} + 20%`,
              invalidateOnRefresh: true,
            },
          });
          panels.current.forEach((val, key) => {
            let tween = gsap.from(val, {
              opacity: 0,
              scale: 0.6,
              duration: 1,
              force3D: true,

              scrollTrigger: {
                trigger: val,

                start: () =>
                  "top top-=" +
                  (val.offsetLeft - window.innerWidth / 2) *
                    (maxWidth / (maxWidth - window.innerWidth)),
                end: () =>
                  "+=" +
                  val.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
                onEnter: () => tween.play(),
                onLeave: () => tween.reverse(),
                onEnterBack: () => tween.play(),
                onLeaveBack: () => tween.reverse(),
              },
            });
            key || tween.progress(1);
          })
          
        }, panels);

        return () => ctx.revert();
      }
    
  }, [isMounted, getWidth]);

  return (
    <Section id="horizontal-scroll" ariaLabel="Scroll Horizontal">
      <div className="w-[500%] h-screen flex flex-nowrap" ref={panelsContainer}>
        {flattenChildren(children).map((child) => (
          <section
            className="relative w-screen h-full flex items-center justify-center m-0 p-0"
            ref={(e) => (panels.current[child.key.substring(1)] = e)}
            key={child.key.substring(1)}
          >
            {child}
          </section>
        ))}
      </div>
    </Section>
  );
};

export default HorizontallWraper;
