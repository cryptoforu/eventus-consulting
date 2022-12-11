import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function BgImage() {
  return (
    <>
      <div className="block dark:hidden">
        <div className="absolute -inset-x-0 -top-40 -bottom-16    bg-indigo-50">
          <div className="absolute left-full top-0 -bottom-20  -translate-x-[50%] sm:left-1/2  sm:-translate-x-[20%] md:translate-x-[0%]">
            <StaticImage
              src="../../images/bg/background-newsletter.jpg"
              alt=""
              
              placeholder="none"
            />
          </div>
        </div>
      </div>
      <div className="hidden dark:flex">
        <div className="absolute left-full top-0 -bottom-20  -translate-x-[50%] sm:left-1/2  sm:-translate-x-[20%] md:translate-x-[0%]">
          <StaticImage
            src="../../images/bg/blur-cyan.png"
            alt=""
            width={530}
            height={530}
            placeholder="none"
            loading="eager"
          />
        </div>
        <div className="absolute left-full top-0 -bottom-10  -translate-x-[50%] sm:left-1/2  sm:-translate-x-[20%] md:translate-x-[0%]">
          <StaticImage
            src="../../images/bg/blur-indigo.png"
            alt=""
            width={530}
            height={530}
            placeholder="none"
            loading="eager"
          />
        </div>
      </div>
    </>
  );
}

const HeroIllustration = () => { 
  return (
    <>
      <div className="block dark:hidden">
        <StaticImage
          src="../../images/bg/background.jpg"
          alt=""
          className="max-w-full h-auto"
          placeholder="none"
          loading="eager"
        />
      </div>
      <div className="hidden dark:flex">
        <StaticImage
          src="../../images/bg/blur-cyan.png"
          alt=""
          className="hidden dark:flex"
          width={530}
          height={530}
          placeholder="none"
          loading="eager"
        />
      </div>
    </>
  );
};

export default HeroIllustration;
