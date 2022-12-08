import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import clsx from "clsx";

const PhoneFrame = ({ className, children, priority = false, ...props }) => { 
  return (
    <div className={clsx("relative aspect-[481/966]", className)} {...props}>
      
      <div className="absolute inset-y-[calc(1/966*100%)] right-0 left-[calc(7/966*100%)] rounded-[calc(58/366*100%)/calc(58/966*100%)]">
      <div className="absolute top-[calc(23/966*100%)] left-[calc(23/426*100%)] grid h-[calc(926/966*100%)] w-[calc(428/481*100%)] transform grid-cols-1 overflow-hidden">
        {children}
      </div>
      </div>
      
      <StaticImage
        src="../../images/iphone_13_silver.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full"
        loading="eager"
        placeholder="none"
      /> 
      
    </div>
  );
};

export default PhoneFrame;  
