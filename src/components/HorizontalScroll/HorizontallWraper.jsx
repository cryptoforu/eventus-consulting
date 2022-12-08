import React, { useLayoutEffect, useRef } from "react";
import flattenChildren from "react-keyed-flatten-children";
import { Section } from "../Elements/Index";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontallWraper = ({ children }) => {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useLayoutEffect(() => {
    let maxWidth = 0;
    const getMaxWidth = () => {
      maxWidth = 0;
      panels.current.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };
    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
    setTimeout(() => {
      gsap.to(panels.current, {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: "none",

        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: true,
          end: () => `+=${maxWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, 500);

    panels.current.forEach((sct, i) => {
      let tween = gsap.from(sct, {
        opacity: 0,
        scale: 0.6,
        duration: 1,
        force3D: true,
        paused: true,
      });
      ScrollTrigger.create({
        trigger: sct,
        start: () =>
          "top top-=" +
          (sct.offsetLeft - window.innerWidth / 2) *
            (maxWidth / (maxWidth - window.innerWidth)),
        end: () =>
          "+=" +
          sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: { targets: sct, className: "active" },
        onEnter: () => tween.play(),
        onLeave: () => tween.reverse(),
        onEnterBack: () => tween.play(),
        onLeaveBack: () => tween.reverse(),
      });
    });
  }, []);

  return (
    <Section id="horizontal-scroll" ariaLabel="Scroll Horizontal">
      <div className="w-[500%] h-screen flex relative" ref={panelsContainer}>
        {flattenChildren(children).map((child) => (
          <section
            className="w-full h-full flex items-center justify-center will-change-transform"
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
