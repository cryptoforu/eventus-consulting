import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import clsx from "clsx";
const MacBookFrame = ({ className, children, priority = false, ...props }) => {
  return (
    <div className={clsx("relative aspect-[1725/1050] overflow-hidden", className)} {...props}>
     
        <div className="absolute top-[calc(120/1050*100%)] left-[calc(170/1725*100%)] grid h-[calc(886/1050*100%)] w-[calc(1382/1725*100%)] transform grid-cols-1 overflow-hidden pt-[calc(16/318*100%)] ">
          {children}
    
      </div>

      <StaticImage
        src="../../images/macbook_chrome.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full z-20  "
        loading="eager"
        placeholder="none"
      />
    </div>
  );
};

export default MacBookFrame;
