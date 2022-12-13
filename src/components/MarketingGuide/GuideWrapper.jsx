import React, { useEffect } from "react";
import flattenChildren from "react-keyed-flatten-children";
import Navigation from "./Navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const GuideWrapper = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sections = document.querySelectorAll(".wrapper");
    let images = document.querySelectorAll(".bg");

    let outerWrappers = gsap.utils.toArray(".outer");
    let innerWrappers = gsap.utils.toArray(".inner");

    let currentIndex = -1;
    let animating;
    let wrap = gsap.utils.wrap(0, sections.length - 1);
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });
    function gotoSection(index, direction) {
      index = wrap(index); // make sure it's valid

      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => (animating = false),
        });
      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      currentIndex = index;
    }

    ScrollTrigger.observe({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      target: ".content",
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });
    gotoSection(0, 1);
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Navigation />
      {flattenChildren(children).map((child) => (
        <section
          key={child.key}
          className="wrapper w-full h-full fixed inset-0 invisible will-change-transform"
        >
          <div className="outer w-full h-full overflow-y-hidden will-change-transform">
            <div className="inner w-full h-full overflow-y-hidden will-change-transform">
              <div className="bg absolute inset-0 flex flex-col h-full w-full bg-indigo-50 dark:bg-slate-900">
                {child}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default GuideWrapper;
