import React, { useLayoutEffect, useRef } from "react";
import flattenChildren from "react-keyed-flatten-children";
import { Section } from "../Elements/Index";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const HorizontallWraper = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger);
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useLayoutEffect(() => {
   

    setTimeout(() => {
      let maxWidth = 0;
      const getMaxWidth = () => {
        maxWidth = 0;
        panels.current.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };
      getMaxWidth();
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

      panels.current.forEach((sct, i) => {
        let tween = gsap.from(sct, {
          opacity: 0,
          scale: 0.6,
          duration: 1,
          force3D: true,
          
          scrollTrigger: {
            trigger: sct,
            
            start: () =>
              "top top-=" +
              (sct.offsetLeft - window.innerWidth / 2) *
                (maxWidth / (maxWidth - window.innerWidth)),
            end: () =>
              "+=" +
              sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
              onEnter: () => tween.play(),
              onLeave: () => tween.reverse(),
              onEnterBack: () => tween.play(),
              onLeaveBack: () => tween.reverse(),
            
          },
        });
        i || tween.progress(1);
      });
    }, 500);
    ScrollTrigger.refresh()
  }, []);

  return (
    <Section id="horizontal-scroll" ariaLabel="Scroll Horizontal">
      <div
        className="w-[500%] h-screen flex flex-nowrap"
        ref={panelsContainer}
      >
        {flattenChildren(children).map((child) => (
          <section
            className="relative w-screen h-full flex items-center justify-center m-0 p-0"
            ref={(e) => createPanelsRefs(e, child.key.substring(1))}
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
